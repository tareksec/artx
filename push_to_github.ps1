Write-Host "===============================================================================" -ForegroundColor Cyan
Write-Host "Initializing Git and Pushing ArtX Studio website updates to GitHub..." -ForegroundColor Cyan
Write-Host "===============================================================================" -ForegroundColor Cyan

Write-Host "[1/6] Initializing git repository..." -ForegroundColor Yellow
git init

Write-Host "[2/6] Adding all files..." -ForegroundColor Yellow
git add .

Write-Host "[3/6] Committing changes..." -ForegroundColor Yellow
git commit -m "feat: complete bilingual website, EmailJS contact form, pricing packages, careers, testimonials, and responsive UI"

Write-Host "[4/6] Ensuring branch is set to main..." -ForegroundColor Yellow
git branch -M main

Write-Host "[5/6] Configuring GitHub remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin "https://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@github.com/tareksec/artx.git"

Write-Host "[6/6] Pushing commits to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "===============================================================================" -ForegroundColor Green
Write-Host "SUCCESS! Everything has been pushed to https://github.com/tareksec/artx.git" -ForegroundColor Green
Write-Host "===============================================================================" -ForegroundColor Green
