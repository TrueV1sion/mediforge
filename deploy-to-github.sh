#!/bin/bash
# MediForge - GitHub Deployment Script
# This script initializes the Git repository and prepares for GitHub deployment

echo "========================================="
echo "   MediForge - GitHub Deployment Setup"
echo "========================================="
echo ""

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Initialize Git repository
print_status "Initializing Git repository..."
git init
print_success "Git repository initialized"

# Add all files
print_status "Adding files to Git..."
git add .
print_success "Files added to Git"

# Create initial commit
print_status "Creating initial commit..."
git commit -m "Initial commit: MediForge Healthcare Application Generator

- AI-powered healthcare app generation
- HIPAA-compliant architecture
- FHIR R4 native support
- Multi-segment support (Provider, Payer, Pharmacy, Laboratory)
- Next.js frontend with TypeScript
- FastAPI backend with Python
- Built on Laudable foundation"

print_success "Initial commit created"

# Set main branch
git branch -M main

# Instructions for GitHub deployment
echo ""
echo "========================================="
echo "   GitHub Repository Setup Instructions"
echo "========================================="
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to: https://github.com/new"
echo "   - Repository name: mediforge"
echo "   - Description: AI-Powered Healthcare Application Generator"
echo "   - Set as Public"
echo "   - DON'T initialize with README (we already have one)"
echo ""
echo "2. Add the remote repository:"
echo "   ${GREEN}git remote add origin https://github.com/YOUR_USERNAME/mediforge.git${NC}"
echo ""
echo "3. Push to GitHub:"
echo "   ${GREEN}git push -u origin main${NC}"
echo ""
echo "========================================="
echo "   Alternative: Using GitHub CLI"
echo "========================================="
echo ""
echo "If you have GitHub CLI installed:"
echo "   ${GREEN}gh repo create mediforge --public --source=. --remote=origin --push${NC}"
echo ""
echo "========================================="
echo "   Next Steps After GitHub Setup"
echo "========================================="
echo ""
echo "1. Install dependencies:"
echo "   ${GREEN}npm install${NC}"
echo ""
echo "2. Setup environment variables:"
echo "   ${GREEN}cp .env.example .env.local${NC}"
echo "   Then edit .env.local with your values"
echo ""
echo "3. Start development servers:"
echo "   ${GREEN}npm run dev${NC}"
echo ""
echo "4. Access the application:"
echo "   Frontend: http://localhost:3000"
echo "   API: http://localhost:8080"
echo "   API Docs: http://localhost:8080/api/docs"
echo ""
print_success "Setup complete! MediForge is ready for GitHub deployment."