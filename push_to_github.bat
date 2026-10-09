@echo off
echo ========================================================
echo Pushing Padmanava Karmakar Portfolio to GitHub...
echo ========================================================
cd /d "%~dp0"
git branch -M main
git remote set-url origin https://github.com/padmanava1/portfolio.git
echo.
echo Make sure you have created the empty repository:
echo https://github.com/new (Repository name: portfolio)
echo.
echo Pushing now (if prompted, click 'Sign in with your browser')...
git push -u origin main
echo.
echo ========================================================
echo Done! In your GitHub repository settings:
echo Go to Settings -> Pages -> Source: select 'GitHub Actions'
echo ========================================================
pause
