@echo off
REM MediForge - GitHub Deployment Script for Windows
REM This script initializes Git and prepares for GitHub deployment

echo =========================================
echo    MediForge - GitHub Deployment Setup
echo =========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [INFO] Initializing Git repository...
git init
if %errorlevel% equ 0 (
    echo [SUCCESS] Git repository initialized
) else (
    echo [ERROR] Failed to initialize Git repository
    pause
    exit /b 1
)

echo [INFO] Adding files to Git...
git add .
if %errorlevel% equ 0 (
    echo [SUCCESS] Files added to Git
) else (
    echo [ERROR] Failed to add files
    pause
    exit /b 1
)

echo [INFO] Creating initial commit...
git commit -m "Initial commit: MediForge Healthcare Application Generator"
if %errorlevel% equ 0 (
    echo [SUCCESS] Initial commit created
) else (
    echo [WARNING] Commit may have failed or there may be no changes
)

echo [INFO] Setting main branch...
git branch -M main

echo.
echo =========================================
echo    GitHub Repository Setup Instructions
echo =========================================
echo.
echo 1. Create a new repository on GitHub:
echo    - Go to: https://github.com/new
echo    - Repository name: mediforge
echo    - Description: AI-Powered Healthcare Application Generator
echo    - Set as Public
echo    - DON'T initialize with README
echo.
echo 2. Copy and run this command to add the remote:
echo    git remote add origin https://github.com/YOUR_USERNAME/mediforge.git
echo.
echo 3. Push to GitHub:
echo    git push -u origin main
echo.
echo =========================================
echo    Alternative: Using GitHub CLI
echo =========================================
echo.
echo If you have GitHub CLI installed, run:
echo    gh repo create mediforge --public --source=. --remote=origin --push
echo.
echo =========================================
echo    Next Steps
echo =========================================
echo.
echo 1. Install dependencies:
echo    npm install
echo.
echo 2. Setup environment:
echo    copy .env.example .env.local
echo    Then edit .env.local with your values
echo.
echo 3. Start development:
echo    npm run dev
echo.
echo [SUCCESS] Setup complete! MediForge is ready for GitHub.
echo.
pause