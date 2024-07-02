git add .
git stash save
git pull origin staging
git checkout staging
git pull
git log
git checkout feat-404
git log
git stash pop
