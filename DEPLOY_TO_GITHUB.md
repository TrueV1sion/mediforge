# 🚀 GitHub Deployment Instructions for MediForge

## Quick Deploy to GitHub

### Option 1: Using Command Line

1. **Open Terminal/Command Prompt in the MediForge directory:**
```bash
cd C:\Users\jared\OneDrive\Desktop\mediforge
```

2. **Initialize Git repository:**
```bash
git init
git add .
git commit -m "Initial commit: MediForge Healthcare Application Generator"
git branch -M main
```

3. **Create repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `mediforge`
   - Description: `AI-Powered Healthcare Application Generator - HIPAA-compliant, FHIR-native`
   - Keep it **Public**
   - **DON'T** initialize with README, .gitignore, or license

4. **Link and push to GitHub:**
```bash
git remote add origin https://github.com/TrueV1sion/mediforge.git
git push -u origin main
```

### Option 2: Using GitHub Desktop

1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Browse to `C:\Users\jared\OneDrive\Desktop\mediforge`
4. Click "Create Repository"
5. Publish to GitHub

### Option 3: Using GitHub CLI

If you have GitHub CLI installed:
```bash
cd C:\Users\jared\OneDrive\Desktop\mediforge
gh repo create mediforge --public --source=. --remote=origin --push
```

## Post-Deployment Setup

### 1. Enable GitHub Pages (for documentation)
- Go to Settings → Pages
- Source: Deploy from branch
- Branch: main, folder: /docs
- Save

### 2. Set up Secrets for CI/CD
Go to Settings → Secrets and variables → Actions, then add:
- `VERCEL_TOKEN`: Your Vercel deployment token
- `SUPABASE_ANON_KEY`: Your Supabase anon key
- `SUPABASE_SERVICE_KEY`: Your Supabase service key

### 3. Enable GitHub Actions
- Actions are automatically enabled
- First workflow will run on push to main

### 4. Configure Branch Protection
- Go to Settings → Branches
- Add rule for `main`
- Enable: Require PR reviews, status checks

## Local Development After Cloning

```bash
# Clone the repository
git clone https://github.com/TrueV1sion/mediforge.git
cd mediforge

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development
npm run dev
```

## Deployment to Production

### Vercel Deployment
```bash
npm install -g vercel
vercel --prod
```

### Docker Deployment
```bash
docker build -t mediforge .
docker run -p 3000:3000 -p 8080:8080 mediforge
```

## Repository Structure
```
mediforge/
├── apps/
│   ├── web/           # Next.js frontend
│   └── api/           # FastAPI backend
├── .github/
│   └── workflows/     # CI/CD pipelines
├── LICENSE            # MIT License
├── README.md          # Main documentation
└── package.json       # Project configuration
```

## Troubleshooting

### Permission Denied Error
```bash
# Windows
icacls . /grant Everyone:F /T

# Mac/Linux
chmod -R 755 .
```

### Git Not Initialized
```bash
git init
git remote add origin https://github.com/TrueV1sion/mediforge.git
```

### Large Files Error
Add to `.gitignore`:
```
node_modules/
.next/
*.log
```

## Support

- Issues: https://github.com/TrueV1sion/mediforge/issues
- Discussions: https://github.com/TrueV1sion/mediforge/discussions
- Documentation: https://mediforge.ai/docs

---

**Ready to deploy!** Follow the steps above to get MediForge on GitHub. 🚀