@echo off
REM MediForge - Windows Setup Script

echo =========================================
echo    MediForge - GitHub Repository Setup
echo =========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

REM Initialize Git repository
echo Initializing Git repository...
git init

REM Configure Git (optional)
echo.
echo Configuring Git...
git config core.autocrlf true

REM Add all files
echo.
echo Adding files to Git...
git add .

REM Create initial commit
echo.
echo Creating initial commit...
git commit -m "Initial commit: MediForge Healthcare Application Generator"

echo.
echo =========================================
echo    Repository initialized successfully!
echo =========================================
echo.
echo Next steps:
echo.
echo 1. Create a new repository on GitHub:
echo    - Go to https://github.com/new
echo    - Name: mediforge
echo    - Description: AI-Powered Healthcare Application Generator
echo    - Do NOT initialize with README
echo.
echo 2. Link your repository (replace YOUR_USERNAME):
echo    git remote add origin https://github.com/YOUR_USERNAME/mediforge.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Install dependencies:
echo    npm install
echo.
echo 4. Start development:
echo    npm run dev
echo.
pause