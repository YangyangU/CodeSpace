# XSS
Cross-Site-Scripting 跨站脚本攻击

黑客往你的页面注入恶意脚本

1. 窃取cookie信息：黑客就可以在其他电脑上模拟登录状态
2. 可以监听用户事件，监听到用户键盘事件，掌握用户信息
3. 伪造登录窗口
4. 在你的页面生成浮窗广告

- 怎么注入

1. 存储型攻击：将脚本提交到数据库中
2. 反射型攻击
3. 基于DOM的XSS

- 怎么防范？
    1. 转义 <script>alert(1)</script>，将<>转义
    2. 利用好内容安全策略CSP检测脚本无法执行
    3. HttpOnly

# CSRF
Cross-Site Request Forgery 跨站请求伪造

黑客引诱你打开一个网址，黑客拿到你的登录状态，并通过第三方站点操作恶意行为

- 预防
    1. 利用好Cookie的SameSite属性

    2. 服务端验证请求来源