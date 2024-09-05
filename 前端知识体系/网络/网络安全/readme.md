# CSRF （跨站请求伪造）

 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。

 在他们的钓鱼站点，攻击者可以通过创建一个AJAX按钮或者表单来针对你的网站创建一个请求：

```html
<form action="https://my.site.com/me/something-destructive" method="POST">
  <button type="submit">Click here for free money!</button>
</form>
```
这是很危险的，因为攻击者可以使用其他http方法例如 delete 来获取结果。 这在用户的session中有很多关于你的网站的详细信息时是相当危险的。 如果一个不懂技术的用户遇到了，他们就有可能会输入信用卡号或者个人安全信息。


# XSS （跨站脚本攻击）

 是一种代码注入攻击，通常是通过将恶意代码注入到网页中，用户浏览网页时，嵌入的恶意代码被执行，从而达到恶意攻击用户的目的。