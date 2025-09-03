# 🚀 MediForge - Quick Start Guide

## Your Healthcare App Generator is Ready!

MediForge has been successfully created at:
`C:\Users\jared\OneDrive\Desktop\mediforge`

## Immediate Next Steps

### 1. Deploy to GitHub (Windows)

**Option A: Use the Batch Script (Easiest)**
```cmd
cd C:\Users\jared\OneDrive\Desktop\mediforge
deploy-github-windows.bat
```

**Option B: Manual Commands**
```cmd
cd C:\Users\jared\OneDrive\Desktop\mediforge
git init
git add .
git commit -m "Initial commit: MediForge Healthcare Application Generator"
git branch -M main
```

Then:
1. Go to https://github.com/new
2. Create repository named "mediforge"
3. Don't initialize with README
4. Run:
```cmd
git remote add origin https://github.com/TrueV1sion/mediforge.git
git push -u origin main
```

### 2. Install Dependencies

```cmd
cd C:\Users\jared\OneDrive\Desktop\mediforge
npm install
```

### 3. Start Development

```cmd
npm run dev
```

Access:
- Frontend: http://localhost:3000
- API: http://localhost:8080
- API Docs: http://localhost:8080/api/docs

## What You've Got

### ✅ Complete Healthcare App Generator
- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: FastAPI with Python, FHIR support
- **Compliance**: HIPAA-ready architecture
- **Database**: Supabase/PostgreSQL ready
- **Deployment**: Vercel-ready configuration

### ✅ Healthcare Features
- Multi-segment support (Provider, Payer, Pharmacy, Lab)
- FHIR R4 native support
- PHI encryption capabilities
- Audit logging framework
- Security middleware

### ✅ Development Tools
- GitHub Actions CI/CD
- ESLint & Prettier configured
- TypeScript configured
- Hot reload enabled

## Test the Application

1. **View the Homepage**:
   - Open http://localhost:3000
   - See the MediForge landing page
   - Explore healthcare segments

2. **Test API**:
   - Open http://localhost:8080/api/docs
   - Try the `/health` endpoint
   - Explore `/api/templates`

3. **Generate a Test App**:
   ```bash
   curl -X POST http://localhost:8080/api/generate \
     -H "Content-Type: application/json" \
     -d '{"prompt": "Create a patient portal", "segment": "provider"}'
   ```

## Customize for Your Needs

### Add Claude AI Integration
Edit `.env.local`:
```env
CLAUDE_API_KEY=your-claude-api-key
```

### Connect Supabase
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## Project Structure
```
mediforge/
├── apps/
│   ├── web/                 # Next.js frontend
│   │   ├── app/             # App router pages
│   │   ├── components/      # React components
│   │   └── lib/            # Utilities
│   └── api/                # FastAPI backend
│       ├── healthcare/     # Healthcare modules
│       └── main.py        # API entry point
├── .github/workflows/     # CI/CD
├── package.json          # Dependencies
└── README.md            # Documentation
```

## Common Commands

```bash
# Development
npm run dev              # Start both frontend and backend
npm run dev:web         # Start frontend only
npm run dev:api         # Start backend only

# Testing
npm test                # Run all tests
npm run test:compliance # Test HIPAA compliance

# Building
npm run build           # Build for production

# Deployment
npm run deploy          # Deploy to Vercel
```

## Troubleshooting

### Port Already in Use
Frontend uses port 3000, API uses 8080. Kill existing processes:
```cmd
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Module Not Found
```bash
cd apps/web
npm install
cd ../api
pip install -r requirements.txt
```

### Python Not Found
Install Python 3.10+ from https://python.org

## Get Help

- **Documentation**: See README.md
- **GitHub Issues**: https://github.com/TrueV1sion/mediforge/issues
- **Community**: Start a discussion on GitHub

---

**🎉 Congratulations!** You now have a complete healthcare application generator ready to build HIPAA-compliant medical software with AI!

Next recommended step: **Deploy to GitHub** using the batch file above.