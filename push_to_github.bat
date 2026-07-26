@echo off
echo ===============================================================================
echo Initializing Git and Pushing ArtX Studio website updates to GitHub...
echo ===============================================================================

echo [1/6] Initializing git repository...
git init

echo [2/6] Adding all files...
git add .

echo [3/6] Committing changes...
git commit -m "feat: complete bilingual website, EmailJS contact form, pricing packages, careers, testimonials, and responsive UI"

echo [4/6] Ensuring branch is set to main...
git branch -M main

echo [5/6] Configuring GitHub remote repository...
git remote remove origin 2>nul
git remote add origin https://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@github.com/tareksec/artx.git

echo [6/6] Pushing commits to GitHub...
git push -u origin main

echo ===============================================================================
echo SUCCESS! Everything has been pushed to https://github.com/tareksec/artx.git
echo ===============================================================================
pause
