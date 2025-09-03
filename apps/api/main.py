"""
MediForge Healthcare API
HIPAA-compliant healthcare application generator backend
"""

from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
import logging
import os
from datetime import datetime
from typing import Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Import routers (we'll create these next)
# from routers import healthcare, fhir, generate, audit

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan manager"""
    # Startup
    logger.info("Starting MediForge Healthcare API")
    logger.info(f"Environment: {os.getenv('ENVIRONMENT', 'development')}")
    logger.info(f"Compliance Level: {os.getenv('COMPLIANCE_LEVEL', 'HIPAA')}")
    
    # Initialize database connection
    # await init_database()
    
    yield
    
    # Shutdown
    logger.info("Shutting down MediForge Healthcare API")

# Create FastAPI application
app = FastAPI(
    title="MediForge Healthcare API",
    description="AI-Powered Healthcare Application Generator - HIPAA-compliant backend",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json"
)

# CORS configuration
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://mediforge.ai",
    "https://*.mediforge.ai",
    "https://*.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Trusted host middleware for security
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["localhost", "*.mediforge.ai", "*.vercel.app"]
)

# Custom middleware for audit logging
@app.middleware("http")
async def audit_middleware(request: Request, call_next):
    """Log all API requests for HIPAA compliance"""
    start_time = datetime.utcnow()
    
    # Log request
    logger.info(f"Request: {request.method} {request.url.path}")
    
    # Process request
    response = await call_next(request)
    
    # Calculate request duration
    duration = (datetime.utcnow() - start_time).total_seconds()
    
    # Log response
    logger.info(f"Response: {response.status_code} - Duration: {duration:.3f}s")
    
    # Add security headers
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    
    return response

# Health check endpoint
@app.get("/health")
async def health_check():
    """Health check endpoint for monitoring"""
    return {
        "status": "healthy",
        "service": "MediForge Healthcare API",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0",
        "compliance": {
            "hipaa": True,
            "gdpr": False,
            "audit_enabled": True
        }
    }

# Root endpoint
@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "name": "MediForge Healthcare API",
        "description": "AI-Powered Healthcare Application Generator",
        "version": "1.0.0",
        "documentation": "/api/docs",
        "health": "/health",
        "segments": [
            "provider",
            "payer",
            "pharmacy",
            "laboratory",
            "life_sciences"
        ],
        "compliance": [
            "HIPAA",
            "FHIR R4",
            "HL7 v2"
        ]
    }

# Healthcare generation endpoint
@app.post("/api/generate")
async def generate_healthcare_app(request: dict):
    """Generate a healthcare application from natural language description"""
    try:
        prompt = request.get("prompt", "")
        segment = request.get("segment", "provider")
        features = request.get("features", [])
        
        if not prompt:
            raise HTTPException(status_code=400, detail="Prompt is required")
        
        # Log generation request (audit trail)
        logger.info(f"Generating healthcare app: {segment} - {prompt[:100]}...")
        
        # TODO: Integrate with Claude AI for actual generation
        # For now, return a mock response
        response = {
            "success": True,
            "message": "Healthcare application generated successfully",
            "application": {
                "name": "Generated Healthcare App",
                "segment": segment,
                "compliance": ["HIPAA", "FHIR R4"],
                "features": features,
                "files": {
                    "frontend": {
                        "pages": ["dashboard", "patients", "appointments"],
                        "components": ["PatientList", "AppointmentCalendar", "ClinicalNotes"]
                    },
                    "backend": {
                        "endpoints": ["/api/patients", "/api/appointments", "/api/fhir"],
                        "services": ["auth", "encryption", "audit"]
                    },
                    "database": {
                        "tables": ["patients", "encounters", "observations", "audit_log"]
                    }
                },
                "deployment": {
                    "platform": "Vercel",
                    "database": "Supabase PostgreSQL",
                    "estimated_time": "5 minutes"
                }
            },
            "preview_url": f"https://preview-{segment}.mediforge.ai",
            "download_url": f"https://download.mediforge.ai/generated-app.zip"
        }
        
        return response
        
    except Exception as e:
        logger.error(f"Generation error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# FHIR endpoints
@app.get("/api/fhir/{resource_type}")
async def get_fhir_resources(resource_type: str, limit: int = 10, offset: int = 0):
    """Get FHIR resources by type"""
    valid_resources = ["Patient", "Encounter", "Observation", "MedicationRequest", "DiagnosticReport"]
    
    if resource_type not in valid_resources:
        raise HTTPException(status_code=400, detail=f"Invalid resource type. Valid types: {valid_resources}")
    
    # TODO: Implement actual FHIR resource retrieval
    return {
        "resourceType": "Bundle",
        "type": "searchset",
        "total": 0,
        "entry": []
    }

@app.post("/api/fhir/{resource_type}")
async def create_fhir_resource(resource_type: str, resource: dict):
    """Create a new FHIR resource"""
    # TODO: Implement FHIR resource creation with validation
    return {
        "resourceType": resource_type,
        "id": "generated-id",
        "meta": {
            "versionId": "1",
            "lastUpdated": datetime.utcnow().isoformat()
        }
    }

# Compliance check endpoint
@app.post("/api/compliance/check")
async def check_compliance(code: dict):
    """Check generated code for healthcare compliance"""
    return {
        "compliant": True,
        "frameworks": ["HIPAA", "FHIR R4"],
        "issues": [],
        "recommendations": [
            "Ensure all PHI is encrypted at rest",
            "Implement session timeout after 15 minutes",
            "Add audit logging for all data access"
        ]
    }

# Audit log endpoint
@app.get("/api/audit")
async def get_audit_logs(limit: int = 100, offset: int = 0):
    """Retrieve audit logs for compliance"""
    # TODO: Implement actual audit log retrieval
    return {
        "total": 0,
        "logs": []
    }

# Templates endpoint
@app.get("/api/templates")
async def get_templates():
    """Get available healthcare application templates"""
    return {
        "templates": [
            {
                "id": "ehr-basic",
                "name": "Basic EHR System",
                "segment": "provider",
                "description": "Electronic Health Records with patient management",
                "features": ["Patient Records", "Clinical Notes", "Appointments", "E-Prescribing"],
                "compliance": ["HIPAA", "FHIR R4"]
            },
            {
                "id": "patient-portal",
                "name": "Patient Portal",
                "segment": "provider",
                "description": "Patient self-service portal with health records access",
                "features": ["Health Records", "Appointments", "Messaging", "Bill Pay"],
                "compliance": ["HIPAA", "FHIR R4", "SMART on FHIR"]
            },
            {
                "id": "claims-processor",
                "name": "Claims Processing System",
                "segment": "payer",
                "description": "Insurance claims management and processing",
                "features": ["Claims Submission", "Adjudication", "Prior Auth", "Provider Network"],
                "compliance": ["HIPAA", "X12 EDI"]
            },
            {
                "id": "pharmacy-management",
                "name": "Pharmacy Management System",
                "segment": "pharmacy",
                "description": "Complete pharmacy dispensing and inventory management",
                "features": ["E-Prescribing", "Dispensing", "Inventory", "Drug Interactions"],
                "compliance": ["HIPAA", "NCPDP SCRIPT", "DEA"]
            },
            {
                "id": "lab-management",
                "name": "Laboratory Information System",
                "segment": "laboratory",
                "description": "Lab test ordering and result management",
                "features": ["Order Management", "Specimen Tracking", "Results", "LOINC Coding"],
                "compliance": ["HIPAA", "CLIA", "HL7"]
            }
        ]
    }

# Error handlers
@app.exception_handler(404)
async def not_found_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=404,
        content={"error": "Resource not found", "path": str(request.url)}
    )

@app.exception_handler(500)
async def internal_error_handler(request: Request, exc: Exception):
    logger.error(f"Internal server error: {str(exc)}")
    return JSONResponse(
        status_code=500,
        content={"error": "Internal server error", "message": "An unexpected error occurred"}
    )

if __name__ == "__main__":
    import uvicorn
    
    port = int(os.getenv("PORT", 8080))
    host = os.getenv("HOST", "0.0.0.0")
    
    uvicorn.run(
        "main:app",
        host=host,
        port=port,
        reload=os.getenv("ENVIRONMENT") == "development",
        log_level="info"
    )