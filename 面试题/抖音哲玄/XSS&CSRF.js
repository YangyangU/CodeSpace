// XSS 跨站脚本攻击
// 通过注入恶意脚本到网页中，窃取用户数据或破坏页面逻辑。防御核心是控制不可信内容的输入和输出。
// 1.输入过滤和输出转义
// 2.使用内容安全策略（CSP）
// 3.禁止使用innerHTML，替换为textContent、vue、react等框架
// 3.使用HTTPOnly和Secure标志的Cookie

// CSRF 跨站请求伪造
// 利用用户已认证的身份，在用户不知情时发送恶意请求。防御核心是验证请求来源和身份。
// 1.检查 Origin 和 Referer 头
// 2.CSRF Token (服务端生成，前端请求时携带)
// 3.SameSite Cookie 属性