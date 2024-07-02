
# git checkout <分支名> ——新建分支

# git branch -m <分支名> <新分支名> ——重命名分支

# git switch -c <分支名> ——新建并切换分支

# git branch -d <分支名> ——合并完成后删除分支

# git branch -D <分支名> ——强制删除分支

# git merge <分支名> ——合并分支

# git branch -vv ——查看本地分支与远程分支的关联关系

# git branch -u origin/<分支名> ——建立本地分支与远程分支的关联关系

# git push origin --delete <分支名> ——删除远程分支

# git push origin <分支名>:<分支名> ——将本地分支推送到远程分支

# git pull origin <分支名>:<分支名> ——将远程分支拉取到本地分支

# git push origin <分支名>:<分支名> --force ——强制推送

# git push origin <分支名>:<分支名> --force-with-lease ——强制推送（带锁）

# git push origin <分支名>:<分支名> --no-verify ——跳过验证推送

# git push origin <分支名>:<分支名> --follow-tags ——推送标签

# git push origin <分支名>:<分支名> --atomic ——原子推送

# git push origin <分支名>:<分支名> --set-upstream ——设置上游分支

# git push origin <分支名>:<分支名> --dry-run ——模拟推送

# git push origin <分支名>:<分支名> --receive-pack <命令> ——自定义推送命令

# git push origin <分支名>:<分支名> --exec <命令> ——自定义推送命令