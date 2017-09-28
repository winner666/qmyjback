
// function do_login() {
//     console.log("1");
//     var name = $("#user_name").val();
//     var pwd = $("#password").val();
//
//     if (!checkName()) {
//         return false;
//     }
//     if (!checkPassword()) {
//         return false;
//     }
//
//     $("#login_btn").attr('disabled', true).val("正在登录...");
//     console.log("hahaLogin");
//
//     $.ajax({
//         timeout: 10000,
//         url: dataUrl+'/account/login.do',
//         type: 'POST',
//         data: {'userName': name, 'loginPwd': pwd},
//         dataType: JSON,
//         success: function (result) {
//             console.log("成功");
//             console.log(result);
//             var dataObj=eval("("+result+")");//转换为json对象
//             if (dataObj.code === '0000') {
//                 console.log(dataObj.id);
//                 console.log(dataObj.message);
//                 setCookie('loginUserId', dataObj.id);
//                 self.location.href = "../html/index.html";
//                 return true;
//             } else {
//                 $('.user_log_info').css('opacity',1).text(dataObj.message);
//                 $("#login_btn").attr('disabled',false).val("登 录");
//                 return false;
//             }
//         },
//         complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
//             if(status==='timeout'){//超时,status还有success,error等值的情况
//                 $('.user_log_info').css('opacity',1).text('网络连接超时');
//                 $("#login_btn").attr('disabled',false).val("登 录");
//                 return false;
//             }
//         }
//         // error: function () {
//         //     console.log("失败");
//         //     alert("用户名密码不匹配");
//         // }
//     });
// }
//
//
// function checkName() {
//     var name = $("#user_name").val();
//     if (name === '') {
//         $(".user_log_info").css('opacity', '1').text('请输入用户名');
//         return false;
//     }
//     if (name === '') {
//         $(".user_log_info").css('opacity', '1').text("用户名不能空");
//         return false;
//     }
//     return true;
// }
//
// function checkPassword() {
//     var pwd = $("#password").val();
//     if (pwd === '') {
//         $(".user_log_info").css('opacity', '1').text('请输入密码');
//         return false;
//     }
//     console.log('pwd\'s length'+pwd.length);
//
//     if ((pwd.length < 6 || pwd.length > 20)) {
//         $(".user_log_info").css('opacity', '1').text('密码输入有误,请输入6-20个字符');
//         return false;
//     }
//     return true;
//
// }
// function setCookie(name, value)
//
// {
//
//     var days = 30; //保存 30 天
//
//     var exp = new Date();
//
//     exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
//
//     document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
//
// }


$('.login').click(function(){
    login()
})






function login() {
    console.log(666)
    var name = $("#user_name").val();
    var pwd = $("#password").val();
    if (name == '') {
        $('.message').html('请输入用户名');
        return false;
    } else {
        $('.message').html('');
    }
    if (pwd == '') {
        $('.message').html('请输入密码');
        return false;
    } else {
        $('.message').html('');
    }
    $.ajax({
        // timeout: 10000,
        url: dataUrl + '/account/login.do',
        type: 'POST',
        data: {'userName': name, 'loginPwd': pwd},
        dataType: JSON,
        success: function (result) {
            console.log("成功");
            console.log(result);
            var dataObj = eval("(" + result + ")");//转换为json对象
            if (dataObj.code === '0000') {
                console.log(dataObj.id);
                console.log(dataObj.message);
                setCookie('loginUserId', dataObj.id);
                self.location.href = "../html/index.html";
                return true;
            } else {
                $('.user_log_info').css('opacity', 1).text(dataObj.message);
                $("#login_btn").attr('disabled', false).val("登 录");
                return false;
            }
        },
        error:function(res){
            console.log(res)
        }


    })
}
    function setCookie(name, value)

{

    var days = 30; //保存 30 天

    var exp = new Date();

    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();

}