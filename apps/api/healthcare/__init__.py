// MediForge Healthcare Core Module - Python
// apps/api/healthcare/__init__.py

const initContent = `"""
MediForge Healthcare Module
Enterprise healthcare application generation for Inovalon
"""

from .core import (
    HealthcareSegment,
    ComplianceFramework,
    FHIRProfile,
    HealthcareAppSpec,
    HealthcarePromptAnalyzer,
    HealthcareTemplateEngine
)

__version__ = "1.0.0"
__all__ = [
    "HealthcareSegment",
    "ComplianceFramework", 
    "FHIRProfile",
    "HealthcareAppSpec",
    "HealthcarePromptAnalyzer",
    "HealthcareTemplateEngine"
]
`