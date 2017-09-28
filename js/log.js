//验证码数据源
$('#img').attr('src',http+'verificationcode')
$('#img').on('click',function(){
    $('#img').attr('src',http+'verificationcode?'+Math.random());
})
var xs_user;//用户名var xs_pwd;//密码var xs_checkCode;//验证码var xs_PWD;//加密
xs_user = $('.userName').val();
xs_pwd = $('.pwd').val();//用户名
$(".userName").on('blur',function(){
	xs_user = $('.userName').val();
	if(xs_user == ''){
        $('.xs-hint-user').show();
        setTimeout(function(){
            $('.xs-hint-user').hide()
        },500)
        return;
   	}
});
$(".userName").on('focus',function(){
	$('.xs-hint-user').hide();
	xs_user = "";
});

//密码
$(".pwd").on('blur',function(){
	xs_pwd = $('.pwd').val();
	if(xs_pwd == ''){
        $('.xs-hint-pwd').show();
        setTimeout(function(){
            $('.xs-hint-pwd').hide()
        },500)
        return;
   };
});
$(".pwd").on('focus',function(){
	$('.xs-hint-pwd').hide();
	xs_pwd = "";
});

//校验码
$(".checkCode").on('blur',function(){
	xs_checkCode = $('.checkCode').val();
	if(xs_checkCode == ''){
        $('.xs-hint-checkCode').show();
        setTimeout(function(){
            $('.xs-hint-checkCode').hide()
        },500)
        return;
   };
});
$(".checkCode").on('focus',function(){
	$('.xs-hint-checkCode').hide();
	xs_checkCode = "";
});

//点击注册
$('.login-register').on('click',function(){
	window.location.href = "xs-register.html";
})
				/*点击登录*/$('.login').on('click',function(){
    console.log(xs_user,xs_pwd,xs_checkCode)    $.ajax({
        type:"post",
        url:http+"user/login",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            "loginName":xs_user,
            "pwd": xs_pwd,
            "verification": xs_checkCode,
            "type":0//0:PC端 1:APP端
        }),
        success: function(data) {
            console.log(data)
            var obj=data.obj;
			
            if(data.msg=="成功"){
            	var a=666777; 
               sessionStorage.setItem('a',a)
               console.log(data.msg)
              var a=666; 
               sessionStorage.setItem('a',a)
               localStorage.setItem('objOne',obj)
             //window.location.href = 'http://116.62.49.14:8072/alloys/resources/index.html';
            }else if(data.msg == "密码输入有误!"){
            	$('.xs-hint-pwd').show();
            	$('.xs-hint-pwd').children('.xs-hint-word').html(data.msg).css("color","red");
            	setTimeout(function(){
		            $('.xs-hint-pwd').hide()
		        },1000)
            }else if(data.msg == "用户名不存在!"){
            	$('.xs-hint-user').show();
            	$('.xs-hint-user').children('.xs-hint-word').html(data.msg).css("color","red");
            	setTimeout(function(){
		            $('.xs-hint-user').hide()
		        },1000)
            }else if(data.msg == "验证码不正确!"){
            	$('.xs-hint-checkCode').show();
            	$('.xs-hint-checkCode').children('.xs-hint-word').html(data.msg).css("color","red");
            	setTimeout(function(){
		            $('.xs-hint-checkCode').hide()
		        },1000)
            	$('#img').attr('src',http+'verificationcode?'+Math.random());
            }
        }
    })})
/*var Cookie = {  
    setCookie:function(name,value,option){  
        var str = name + "=" + escape(value);  
        if(option){  
            if(option.expireDays){  
                var date = new Date();  
                var ms = option.expireDays * 24 * 3600 * 1000;  
                date.setTime(date.getTime() + ms);  
                str += "; expires=" + date.toGMTString();  
            }  
            if(option.path)str += ";path=" + option.path;  
            if(option.domain)str += ";domain=" + option.domain;  
            if(option.secure)str += ";true";  
        }  
        document.cookie = str;  
    },  
    getCookie:function(name){  
        var cookies = document.cookie.split(";");  
        for(var i=0; i<cookies.length;i++){  
            var arr=cookies[i].split("=");  
            if(arr[0]==name){  
                return unescape(arr[1]);  
            }  
        }  
        return "";  
    },  
    delCookie:function(name){  
        this.setCookie(name,"",{expireDays:-1});  
    }  
}  
window.onload=function(){  
    if("1"==Cookie.getCookie("diffmaker")){  
        //alert("找到Cookie，我将不再刷新页面，并删除Cookie");  
        Cookie.delCookie("diffmaker");  
    }else{  
        //alert("没有找到Cookie，我将刷新页面!");  
        Cookie.setCookie("diffmaker","1",null);  
        window.location.reload(true);  
    }  
} */ 