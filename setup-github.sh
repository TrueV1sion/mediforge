#!/bin/bash

# MediForge - GitHub Repository Setup Script
# This script initializes git and prepares for GitHub push

echo "========================================="
echo "   MediForge - GitHub Setup"
echo "========================================="
echo ""

# Initialize Git repository
echo "Initializing Git repository..."
git init

# Add all files
echo "Adding files to Git..."
git add .

# Create initial commit
echo "Creating initial commit..."
git commit -m "Initial commit: MediForge Healthcare Application Generator

- AI-powered healthcare app generation
- HIPAA-compliant architecture
- FHIR R4 native support
- Multi-segment support (Provider, Payer, Pharmacy, Laboratory)
- Built on Laudable foundation
- Next.js frontend with healthcare components
- FastAPI backend with compliance features
- Instant deployment to Vercel
- Supabase integration for HIPAA-compliant database"

echo ""
echo "========================================="
echo "   Repository initialized successfully!"
echo "========================================="
echo ""
echo "Next steps to push to GitHub:"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Name: mediforge"
echo "   - Description: AI-Powered Healthcare Application Generator"
echo "   - Make it public or private as desired"
echo "   - Do NOT initialize with README (we already have one)"
echo ""
echo "2. Add GitHub remote and push:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/mediforge.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Install dependencies:"
echo "   npm install"
echo ""
echo "4. Start development:"
echo "   npm run dev"
echo ""
echo "Your MediForge repository is ready!"