<%--
  Created by IntelliJ IDEA.
  User: 49554
  Date: 2023/10/26
  Time: 10:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Title</title>
  <style>
    body {
      text-align: center;
    }
    form{
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 400px;
    }
  </style>
</head>
<body>
<form>
  <fieldset>
    <legend>表单</legend>
    <table>
      <tr>
        用户名：<input type="text" size="30" id="txt1">
      </tr>
      <br>
      <tr>
        密码：<input type="text" size="30" id="txt2">
      </tr>
      <br>
      <tr>
        确认密码<input type="text" size="30" id="txt3">
      </tr>
      <br>
      <tr>
        邮箱<input type="text" size="30" id="txt4">
      </tr>
      <br>
      <tr>
        爱好
        <input type="checkbox" name="hobbies" value="阅读"/>阅读
        <input type="checkbox" name="hobbies" value="跳舞"/>跳舞
        <input type="checkbox" name="hobbies" value="编程"/>编程
        <input type="checkbox" name="hobbies" value="足球"/>足球
      </tr>
      <br>
      <tr>
        <input type="button" value="注册" onclick="zhuce()">
        &nbsp;
        <input type="button" value="重置" onclick="chongzhi()">
      </tr>
    </table>
  </fieldset>
</form>
<script>
  function zhuce(){
    var txt1=document.getElementById("txt1").value;
    var txt2=document.getElementById("txt2").value;
    var txt3=document.getElementById("txt3").value;
    var txt4=document.getElementById("txt4").value;
    var hobbies=[];
    var checkboxes = document.getElementsByName("hobbies");
    for (var i =0;i<checkboxes.length;i++)
    {
      if(checkboxes[i].checked){
        hobbies.push(checkboxes[i].value);
      }
    }
    console.log(hobbies)
    if(txt1.length>10 || 'A'>txt1[0] || txt1[0]>='z'){
      alert("用户名不能小于10个字符,且以字母开头")
    }
    else if(txt2!=txt3){
      alert("两次密码不一致");
    }
    else if(txt4.indexOf("@")==-1){
      alert("邮箱格式不正确");
    }

    else{
      var selectedHobbies = hobbies.join(" ")
      window.location.href="chenggong.jsp?message=注册成功,"+txt1+"欢迎您！&hobbies=" + selectedHobbies;
    }
  }
  function chongzhi(){
    document.getElementById("txt1").value=" ";
    document.getElementById("txt2").value=" ";
    document.getElementById("txt3").value=" ";
    document.getElementById("txt4").value=" ";
    var checkboxes= document.getElementsByName("hobbies")
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked=false;
    }
  }

</script>

</body>
</html>
