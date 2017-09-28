// $(document).ready(function () {
// });


var pushId = '';




function load() {
    //获取推送信息详情
    getPushMsgInfo();
}






function getPushMsgInfo() {
    $.ajax({
        timeout: 10000,
        type: "POST",
        url:dataUrl+'/message/queryPushMsg.do',
        data:{},
        dataType: "json",
        success: function(data){
            var crmHtmlz2 = '';
            $.each(data,function(i,item){
                $.each(item,function(i,dd){
                	var year=dd.messageDateTime.substring(0,4);
									var month=dd.messageDateTime.substring(4,6);
									var data=dd.messageDateTime.substring(6,8);
									var  hour=dd.messageDateTime.substring(8,10);
									var minute=dd.messageDateTime.substring(10,12);
									var second=dd.messageDateTime.substring(12,14);
									//console.log(year,month,data,hour,minute,second)
									time=year+'-'+month+'-'+data+' '+hour+':'+minute+':'+second;
                    crmHtmlz2 += "<tr>" +
                        "<td><input type='radio' checked name='abc' onclick='setPushId("+dd.pushId+")'></td>" +
                        "<td>"+dd.messageTitle+"</td><td>"+dd.messageContext+"</td>" +
                        "<td>"+time+"</td><td>"+dd.sendFlg+"</td>" +
                        "<td><a href=javascript:del(" + dd.pushId + ")>删除</a></td>" +
                        "</tr>";
                });
                $('.zhengyue').html(crmHtmlz2);
            });

        },
        error:function(result) {
            alert("hehe");
        }
    });
}






function del(id) {
    if (confirm("是否确定删除？")) {
        $.ajax({
            timeout: 10000,
            type: "POST",
            url: dataUrl+"/message/deletePushMsg.do",
            data:{'pushId': id},
            dataType:"json",

            success: function(result) {
                refresh();
                confirm("删除成功");
            }

        });
    }
}

function pushMsg() {
    if (confirm("是否确定推送选中的信息？")) {
        // alert("准备推送："+pushId);

        $.ajax({
            timeout: 10000,
            type: "POST",
            url:url+"/sendSMSController/pushAll.do",
            data:{'pushId': pushId},
            dataType:"json",

            success: function() {
                refresh();
                confirm("群体推送成功");
            },
            error:function() {
                alert("shibaile")

            }


        });
    }
}




function savePushMsg () {
    if (confirm("是否保存该信息？")) {

        // alert("准备保存：");

        var newTitle = $('#newTitle').val();
        var newContext = $('#newContext').val();
        // alert(newTitle);
        // alert(newContext);

        $.ajax({
            timeout: 10000,
            type: "POST",
            url:dataUrl+"/message/savePushMsg.do",
            data:{'title': newTitle,'context':newContext},
            dataType:"json",

            success: function(result) {
                // var jsonObj = eval("(" + result + ")");
                // var jsonObj=$.parseJSON(result);
                // alert(jsonObj);
                // console.log(jsonObj);
                // if (jsonObj.code ==='0011086'){
                //     alert(jsonObj.message);
                // }
                // if (jsonObj.code ==='9999'){
                //     alert(jsonObj.message);
                // }

                refresh();
                confirm("保存成功");
            },

            error:function() {
                alert("保存失败");
            }


        });
    }




}









function setPushId(id) {
    pushId = id;
    // alert("获得pushId:" + pushId);

}

function refresh() {
    window.location.reload();

}
