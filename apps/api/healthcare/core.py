"""
MediForge Healthcare Core Module
Analyzes prompts and generates healthcare-specific applications
"""

from typing import Dict, Any, List, Optional
from enum import Enum
import re
import json
from dataclasses import dataclass

class HealthcarePromptAnalyzer:
    """Analyzes natural language prompts to extract healthcare requirements"""
    
    def __init__(self):
        self.segment_keywords = {
            "provider": [
                "ehr", "electronic health", "clinical", "hospital", "clinic",
                "physician", "doctor", "nurse", "patient chart", "medical record"
            ],
            "payer": [
                "insurance", "claims", "member", "benefits", "authorization",
                "eligibility", "payer", "coverage"
            ],
            "pharmacy": [
                "prescription", "pharmacy", "medication", "dispensing", "drug"
            ],
            "laboratory": [
                "lab", "laboratory", "test", "specimen", "pathology", "lis"
            ]
        }
        
        self.compliance_keywords = {
            "hipaa": ["hipaa", "phi", "protected health"],
            "gdpr": ["gdpr", "europe", "eu", "data protection"],
            "21_cfr_part_11": ["fda", "21 cfr", "clinical trial"],
            "hitrust": ["hitrust", "security framework"]
        }
    
    def analyze(self, prompt: str) -> Dict[str, Any]:
        """Analyze prompt and extract healthcare specifications"""
        prompt_lower = prompt.lower()
        
        return {
            "segment": self._detect_segment(prompt_lower),
            "compliance": self._detect_compliance(prompt_lower),
            "features": self._detect_features(prompt_lower),
            "integrations": self._detect_integrations(prompt_lower),
            "security_level": "high",  # Default for healthcare
            "audit_enabled": True  # Always true for healthcare
        }
    
    def _detect_segment(self, prompt: str) -> str:
        """Detect healthcare segment from prompt"""
        scores = {}
        
        for segment, keywords in self.segment_keywords.items():
            score = sum(1 for keyword in keywords if keyword in prompt)
            if score > 0:
                scores[segment] = score
        
        if scores:
            return max(scores, key=scores.get)
        return "provider"  # Default
    
    def _detect_compliance(self, prompt: str) -> List[str]:
        """Detect compliance requirements"""
        frameworks = ["hipaa"]  # Always include HIPAA
        
        for framework, keywords in self.compliance_keywords.items():
            if any(keyword in prompt for keyword in keywords):
                if framework not in frameworks:
                    frameworks.append(framework)
        
        return frameworks
    
    def _detect_features(self, prompt: str) -> List[str]:
        """Detect requested features"""
        features = []
        
        feature_patterns = {
            "patient_management": r"patient\s+(management|tracking|registration)",
            "clinical_documentation": r"(clinical|medical)\s+(notes?|documentation)",
            "e_prescribing": r"e[\-\s]?prescri(bing|ption)",
            "appointment_scheduling": r"appointment|scheduling|booking",
            "billing": r"billing|claims|payment|revenue",
            "telemedicine": r"video|virtual\s+visit|telehealth",
            "lab_integration": r"lab\s+(result|integration|order)",
            "analytics": r"analytics|reporting|dashboard|metrics"
        }
        
        for feature, pattern in feature_patterns.items():
            if re.search(pattern, prompt, re.IGNORECASE):
                features.append(feature)
        
        # Add default features if none detected
        if not features:
            features = ["patient_management", "clinical_documentation"]
        
        return features
    
    def _detect_integrations(self, prompt: str) -> List[str]:
        """Detect integration requirements"""
        integrations = []
        
        integration_keywords = {
            "epic": ["epic"],
            "cerner": ["cerner"],
            "surescripts": ["surescripts", "e-prescrib"],
            "commonwell": ["commonwell", "hie"]
        }
        
        for integration, keywords in integration_keywords.items():
            if any(keyword in prompt for keyword in keywords):
                integrations.append(integration)
        
        return integrations


class FHIRResourceGenerator:
    """Generates FHIR R4 compliant resources"""
    
    @staticmethod
    def generate_patient_resource() -> Dict[str, Any]:
        """Generate a FHIR Patient resource template"""
        return {
            "resourceType": "Patient",
            "id": "example",
            "identifier": [
                {
                    "system": "http://hospital.example.org/patients",
                    "value": "12345"
                }
            ],
            "active": True,
            "name": [
                {
                    "use": "official",
                    "family": "Doe",
                    "given": ["John", "Middle"]
                }
            ],
            "telecom": [
                {
                    "system": "phone",
                    "value": "(555) 123-4567",
                    "use": "home"
                },
                {
                    "system": "email",
                    "value": "john.doe@example.com"
                }
            ],
            "gender": "male",
            "birthDate": "1980-01-01",
            "address": [
                {
                    "use": "home",
                    "line": ["123 Main St"],
                    "city": "Anytown",
                    "state": "CA",
                    "postalCode": "12345",
                    "country": "USA"
                }
            ]
        }
    
    @staticmethod
    def generate_encounter_resource() -> Dict[str, Any]:
        """Generate a FHIR Encounter resource template"""
        return {
            "resourceType": "Encounter",
            "id": "example",
            "status": "in-progress",
            "class": {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                "code": "AMB",
                "display": "ambulatory"
            },
            "type": [
                {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "162673000",
                            "display": "General examination"
                        }
                    ]
                }
            ],
            "subject": {
                "reference": "Patient/example"
            },
            "period": {
                "start": "2024-01-01T10:00:00Z"
            }
        }


class ComplianceValidator:
    """Validates healthcare applications for compliance"""
    
    def __init__(self):
        self.hipaa_requirements = [
            "encryption_at_rest",
            "encryption_in_transit",
            "access_controls",
            "audit_logging",
            "data_backup",
            "incident_response"
        ]
    
    def validate_hipaa(self, app_config: Dict[str, Any]) -> Dict[str, Any]:
        """Validate HIPAA compliance"""
        results = {
            "compliant": True,
            "issues": [],
            "recommendations": []
        }
        
        # Check encryption
        if not app_config.get("security", {}).get("encryption"):
            results["compliant"] = False
            results["issues"].append("Missing encryption configuration")
            results["recommendations"].append("Implement AES-256 encryption")
        
        # Check audit logging
        if not app_config.get("compliance", {}).get("audit_logging"):
            results["compliant"] = False
            results["issues"].append("Audit logging not enabled")
            results["recommendations"].append("Enable comprehensive audit logging")
        
        # Check access controls
        if not app_config.get("security", {}).get("authentication"):
            results["compliant"] = False
            results["issues"].append("Access controls not configured")
            results["recommendations"].append("Implement role-based access control")
        
        return results