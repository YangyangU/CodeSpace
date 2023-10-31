<%--
  Created by IntelliJ IDEA.
  User: 49554
  Date: 2023/10/26
  Time: 10:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>注册成功</title>
</head>
<body>
    <h1><%= request.getParameter("message")%></h1>
    <hr>
    <h2>您的爱好是：<%= request.getParameter("hobbies")%></h2>
</body>
</html>
