## 将commit messages 导出

### 即导出log

```bash
# 导出所有log到log.txt
git log > log.txt

# 导出指定字段 '编号 - 提交说明'
git log --pretty=format:"%h - %s" > log.txt

# 逐行以'1.提交说明'格式 导出最近二十条
$counter = 1
git log -n 20 --pretty=format:"%s" | ForEach-Object {
    "$counter. $_" | Out-File -FilePath commit_messages.txt -Append
    $counter++
}
```

### 常用占位

Commit 信息：
%H：提交对象（commit）的完整哈希字符串
%h：提交对象的简短哈希字符串
%T：树对象（tree）的完整哈希字符串
%t：树对象的简短哈希字符串
%P：父对象（parent）的完整哈希字符串
%p：父对象的简短哈希字符串

作者/提交者信息：
%an：作者名字
%ae：作者电子邮件
%ad：作者修订日期（可以通过 --date= 选项自定义格式）
%ar：作者修订日期，按多久以前的形式
%cn：提交者名字
%ce：提交者电子邮件
%cd：提交日期
%cr：提交日期，按多久以前的形式

其他信息：
%s：提交说明（commit message）
%d：在引用（如标签）中显示 ref 名称
%b：提交说明的正文
%N：引用名称（如提交的简短哈希或标签）

### 解决中文乱码

```bash
git config --global i18n.logOutputEncoding gb2312
```

## 参考

- [How do I export a Git log to a text file?](https://stackoverflow.com/questions/10330425/how-do-i-export-a-git-log-to-a-text-file)

