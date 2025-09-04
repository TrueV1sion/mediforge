# MediForge 🏥
## AI-Powered Healthcare Application Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HIPAA Compliant](https://img.shields.io/badge/HIPAA-Compliant-green.svg)](https://www.hhs.gov/hipaa/index.html)
[![FHIR R4](https://img.shields.io/badge/FHIR-R4-blue.svg)](https://www.hl7.org/fhir/)

MediForge is an enterprise-grade healthcare application generator that combines Claude Code's AI capabilities with healthcare-specific compliance, security, and interoperability features. Built on the Laudable foundation, it enables rapid development of HIPAA-compliant healthcare applications through natural language descriptions.

## 🚀 Features

### Healthcare Segments Supported
- **🏥 Provider**: Electronic Health Records (EHR), Practice Management, Telemedicine
- **💼 Payer**: Claims Processing, Member Portals, Prior Authorization
- **💊 Pharmacy**: E-Prescribing, Dispensing, PBM Integration
- **🔬 Laboratory**: LIS, Specimen Tracking, LOINC Coding
- **🧪 Life Sciences**: Clinical Trials, Pharmacovigilance

### Compliance & Security
- HIPAA Privacy and Security Rules
- GDPR Support for EU Operations
- 21 CFR Part 11 for Life Sciences
- PHI Encryption (AES-256-GCM)
- Immutable Audit Logging
- Role-Based Access Control (RBAC)
- Break-Glass Emergency Access
- Session Management (15-minute timeout)

### Technical Features
- FHIR R4 with US Core Profiles
- HL7 v2 Messaging Support
- X12 EDI for Claims Processing
- Natural Language to Healthcare App
- Instant Preview with Hot Reload
- One-Click Deployment to Vercel
- Supabase PostgreSQL with RLS

## 📋 Prerequisites

- Node.js 18+
- Python 3.10+
- Claude Code or Cursor CLI
- Git
- Supabase account (for database)
- Vercel account (for deployment)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/TrueV1sion/mediforge.git
cd mediforge

# Install dependencies
npm install

# Setup healthcare components
npm run healthcare:setup

# Start development servers
npm run dev
```

## 🎯 Quick Start

### 1. Connect Claude Code
```bash
claude
> /login
```

### 2. Start MediForge
```bash
npm run dev
```

### 3. Generate a Healthcare App
Simply describe what you want:
- "Create a HIPAA-compliant patient portal with appointment scheduling"
- "Build an insurance claims processing system"
- "Generate a pharmacy management system with e-prescribing"

### 4. Deploy to Production
```bash
npm run deploy
```

## 🏗️ Architecture

```
mediforge/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── app/                # App router pages
│   │   ├── components/         # React components
│   │   │   ├── healthcare/     # Healthcare-specific
│   │   │   └── ui/            # Base UI components
│   │   └── lib/               # Utilities
│   └── api/                   # FastAPI backend
│       ├── healthcare/        # Healthcare modules
│       ├── routers/          # API endpoints
│       └── services/         # Business logic
├── healthcare-config/        # Templates & rules
├── packages/
│   ├── fhir/                # FHIR utilities
│   └── compliance/          # Compliance validators
└── infrastructure/          # Deployment configs
```

## 🔒 Security & Compliance

MediForge implements multiple layers of security:

- **Data Encryption**: AES-256 at rest, TLS 1.3 in transit
- **Access Control**: RBAC with break-glass emergency access
- **Audit Trail**: Immutable logging of all PHI access
- **Session Management**: Automatic timeout after 15 minutes
- **Compliance Frameworks**: HIPAA, GDPR, 21 CFR Part 11

## 🔧 Configuration

Create a `.env.local` file:

```env
# Healthcare Configuration
HEALTHCARE_MODE=true
COMPLIANCE_LEVEL=HIPAA
AUDIT_ENABLED=true
ENCRYPTION_ALGORITHM=AES-256-GCM

# Database
DATABASE_URL=postgresql://...
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=your_anon_key

# Deployment
VERCEL_TOKEN=your_vercel_token
```

## 📚 Documentation

- [Getting Started Guide](./docs/getting-started.md)
- [Healthcare Templates](./docs/templates.md)
- [FHIR Integration](./docs/fhir-integration.md)
- [Compliance Guide](./docs/compliance.md)
- [API Reference](./docs/api-reference.md)

## 🧪 Testing

```bash
# Run all tests
npm test

# Healthcare compliance tests
npm run test:compliance

# HIPAA validation
npm run test:hipaa

# Security audit
npm run audit:security
```



## 🙏 Acknowledgments

- Built by Jared Peck
- Powered by [Claude Code](https://anthropic.com) AI
- UI components from [shadcn/ui](https://ui.shadcn.com)
- FHIR resources from [HL7](https://www.hl7.org/fhir/)

---

**⚠️ Healthcare Disclaimer**: MediForge generates application templates that require proper configuration, testing, and validation before use in production healthcare environments. Always ensure compliance with local healthcare regulations and standards.

**🔐 Security Notice**: This is a template generator. Actual deployment requires proper security configuration, SSL certificates, and compliance validation for your specific use case.
