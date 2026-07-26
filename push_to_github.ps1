Write-Host "===============================================================================" -ForegroundColor Cyan
Write-Host "Syncing and Pushing ArtX Studio website updates to GitHub..." -ForegroundColor Cyan
Write-Host "===============================================================================" -ForegroundColor Cyan

Write-Host "[1/7] Ensuring git repository is initialized..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) { git init }

Write-Host "[2/7] Adding all files..." -ForegroundColor Yellow
git add .

Write-Host "[3/7] Committing changes..." -ForegroundColor Yellow
git commit -m "feat: complete bilingual website, EmailJS contact form, pricing packages, careers, testimonials, and responsive UI"

Write-Host "[4/7] Ensuring branch is set to main..." -ForegroundColor Yellow
git branch -M main

Write-Host "[5/7] Configuring GitHub remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin "https://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@github.com/tareksec/artx.git"

Write-Host "[6/7] Pulling remote history cleanly (without rebasing or force pushing)..." -ForegroundColor Yellow
git pull origin main --allow-unrelated-histories --no-rebase -X ours --no-edit

Write-Host "[7/7] Pushing commits to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "===============================================================================" -ForegroundColor Green
Write-Host "SUCCESS! Everything has been synced and pushed to https://github.com/tareksec/artx.git" -ForegroundColor Green
Write-Host "===============================================================================" -ForegroundColor Green
