@echo off
echo ===============================================================================
echo Syncing and Pushing ArtX Studio website updates to GitHub...
echo ===============================================================================

echo [1/7] Ensuring git repository is initialized...
if not exist .git git init

echo [2/7] Adding all files...
git add .

echo [3/7] Committing changes...
git commit -m "feat: complete bilingual website, EmailJS contact form, pricing packages, careers, testimonials, and responsive UI"

echo [4/7] Ensuring branch is set to main...
git branch -M main

echo [5/7] Configuring GitHub remote repository...
git remote remove origin 2>nul
git remote add origin https://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@github.com/tareksec/artx.git

echo [6/7] Pulling remote history cleanly (without rebasing or force pushing)...
git pull origin main --allow-unrelated-histories --no-rebase -X ours --no-edit

echo [7/7] Pushing commits to GitHub...
git push -u origin main

echo ===============================================================================
echo SUCCESS! Everything has been synced and pushed to https://github.com/tareksec/artx.git
echo ===============================================================================
pause
