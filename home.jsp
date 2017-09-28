<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<html title="青木易家管理平台">
<head>

    <title>青木易家管理平台</title>
    <script src="js/jquery-1.4.3.js"></script>
    <script src="js/login.js"></script>
    <%--<style type="text/css">--%>
    <%--@import "css/nb.css";--%>
    <%--</style>--%>
    <link rel="stylesheet" href="css/nb.css">
</head>
<body background="img/back_ground.png"style="background-repeat: no-repeat; background-size: 100% 100%;background-attachment: fixed">

<!--顶部-->
<div class="nb_logo_log">
    <div class="nb_logo_c_log"></div>
</div>
<!--界面-->
<div class="nb_interface_log">
    <div class="nb_interface_c_log">
        <div class="nb_interface_1_log f1">
            <!--广告位1-->
            <div class="ad1">预留广告位</div>
            <!--广告位2-->
            <div class="ad2">预留广告位</div>
        </div>
        <div class="title" id="title">
            <h1>青木易家管理平台</h1>
        </div>
        <div class="nb_interface_r_log fr">
            <div class="interface_info_log" >
                <h3>帐号登录</h3>
                <p class="user_log_info"></p>
                <div class="quc-main_log">
                    <form class="quc-form_log" id="log_form" method="post" onsubmit="do_login();return false;">
                        <p class="user_log">
                            <span class="pep_log f1"></span>
                            <span class="pep_text_log f1">
                                 <input type="text" maxlength="20" id="user_name" name="user_name" placeholder="用户名" autocomplete="off">
                            </span>
                            <span class="error" id="user_name_msg"></span>
                        </p>
                        <p class="pwd_log">
                            <span class="pw_log f1"></span>
                            <span class="pwd_text_log f1">
                                <input type="password" id="password" name="password" placeholder="登录密码" autocomplete="off">
                            </span>
                            <span class="error" id="password_msg"></span>
                        </p>
                        <p class="info_log">
                            <a class="forget_info_log f1" title="忘记密码？" href="html/forgetPwd.html">忘记密码？</a>
                        </p>
                        <p class="nb_next_log">
                            <input class="sub_log" type="submit" value="&nbsp登&nbsp录&nbsp" id="login_btn">
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
