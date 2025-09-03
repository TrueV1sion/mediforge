# Getting Started with MediForge

## Overview

MediForge is an AI-powered healthcare application generator that creates HIPAA-compliant, FHIR-native healthcare applications from natural language descriptions. Built on the Laudable foundation, it extends the capabilities with healthcare-specific features.

## System Requirements

- Node.js 18+ 
- Python 3.10+
- Git
- npm or yarn
- Claude Code or Cursor CLI (optional, for AI generation)

## Installation

### 1. Clone the Repository

```bash
cd C:\Users\jared\OneDrive\Desktop\mediforge
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install web app dependencies
cd apps/web
npm install
cd ../..

# Install Python dependencies
cd apps/api
python -m venv .venv
# On Windows:
.venv\Scripts\activate
# On Mac/Linux:
source .venv/bin/activate
pip install -r requirements.txt
cd ../..
```

### 3. Environment Configuration

Copy the example environment file and configure:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
- Database credentials (Supabase)
- API keys (if using external services)
- Security settings

### 4. Start Development Servers

```bash
npm run dev
```

This starts:
- Next.js frontend on http://localhost:3000
- FastAPI backend on http://localhost:8080
- API documentation on http://localhost:8080/docs

## Project Structure

```
mediforge/
├── apps/
│   ├── web/                 # Next.js frontend
│   │   ├── app/             # App router pages
│   │   ├── components/      # React components
│   │   │   └── healthcare/  # Healthcare-specific components
│   │   └── lib/            # Utilities and hooks
│   └── api/                # FastAPI backend
│       ├── healthcare/     # Healthcare modules
│       └── routers/       # API endpoints
├── package.json           # Root package configuration
└── README.md             # Project documentation
```

## Using MediForge

### 1. Basic Healthcare App Generation

Navigate to http://localhost:3000 and:

1. Select a healthcare segment (Provider, Payer, Pharmacy, Laboratory)
2. Describe your application in natural language
3. Click "Generate Healthcare Application"
4. View the generated code and preview

### 2. Example Prompts

**EHR System:**
```
Create a HIPAA-compliant EHR system with patient management, clinical documentation, appointment scheduling, and e-prescribing
```

**Claims Portal:**
```
Build an insurance claims processing portal with member management, prior authorization, and eligibility verification
```

**Pharmacy System:**
```
Generate a pharmacy management system with e-prescribing, inventory tracking, and drug interaction checking
```

### 3. API Usage

You can also generate applications via API:

```python
import requests

response = requests.post('http://localhost:8080/api/generate', json={
    "prompt": "Create a telemedicine platform with video consultations",
    "segment": "provider",
    "compliance_frameworks": ["hipaa", "gdpr"],
    "features": ["telemedicine", "patient_portal", "scheduling"]
})

generated_app = response.json()
```

## Healthcare Features

### Compliance
- **HIPAA**: PHI encryption, audit logging, access controls
- **GDPR**: Consent management, data portability
- **21 CFR Part 11**: Electronic signatures, audit trails

### Security
- AES-256-GCM encryption for PHI
- Role-based access control (RBAC)
- Session timeout (15 minutes)
- Break-glass emergency access
- Comprehensive audit logging

### Interoperability
- FHIR R4 with US Core profiles
- HL7 v2 messaging
- X12 EDI for claims
- NCPDP SCRIPT for e-prescribing

## Deployment

### Deploy to Vercel

```bash
npm run deploy:vercel
```

### Deploy to Custom Infrastructure

The generated applications include Docker and Kubernetes configurations for enterprise deployment.

## Testing

```bash
# Run all tests
npm test

# Test HIPAA compliance
npm run test:hipaa

# Security audit
npm run audit:security
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## Support

- Documentation: See `/docs` folder
- Issues: GitHub Issues
- Email: support@mediforge.ai

## License

MIT License - see LICENSE file for details

## Healthcare Disclaimer

MediForge generates application templates that require proper configuration, testing, and validation before use in production healthcare environments. Always ensure compliance with local healthcare regulations and standards.