/**
 * Created by Rust on 2017/5/25.
 */







function load() {
    //获取百分比
    getWorkerPercent();
    getWorkerPercent01();//微信端下单单价
}






function getWorkerPercent() {

  var  planId1 = $('#input1').val();


    $.ajax({
        timeout: 10000,
        type: "POST",
        url:dataUrl+'/finance/queryPercent.do',
        data:{'discountPlan':planId1},
        dataType: "json",
        success: function(result){

            console.log(result);
            var percent=JSON.stringify(result.percent);
            var _percent=JSON.parse(percent);
            var code = JSON.stringify(result.code);
            var _code = JSON.parse(code);
            var msg = JSON.stringify(result.message);
            var _msg = JSON.parse(msg);
            if (_code==='0011086'){
                alert(_msg);
                return false;
            }


            console.log(_percent);
            $('#percent').append(_percent);

        },
        error:function(result) {
            alert("error");
        }
    });
}
function getWorkerPercent01() {

    var  planId1 = $('#input01').val();


    $.ajax({
        timeout: 10000,
        type: "POST",
        url:dataUrl+'/finance/queryPercent.do',
        data:{'discountPlan':planId1},
        dataType: "json",
        success: function(result){

            console.log(result);
            var percent=JSON.stringify(result.percent);
            var _percent=JSON.parse(percent);
            var code = JSON.stringify(result.code);
            var _code = JSON.parse(code);
            var msg = JSON.stringify(result.message);
            var _msg = JSON.parse(msg);
            if (_code==='0011086'){
                alert(_msg);
                return false;
            }


            console.log(_percent);
            $('#percent01').append(_percent);

        },
        error:function(result) {
            alert("error");
        }
    });
}







function savePercent() {
    if (confirm("是否确定保存该比例？")) {
        // alert("准备推送："+pushId);
        var  planId1 = $('#input1').val();



        var percent = $('#percent').text();
        console.log('plan'+planId1+'---'+'percent:'+percent);




        $.ajax({
            timeout: 10000,
            type: "POST",
            url: dataUrl+"/finance/savePercent.do",
            data:{'plan':planId1,'percent':percent},
            dataType:"json",

            success: function(result) {
                var code=JSON.stringify(result.code);
                var _code=JSON.parse(code);
                var message=JSON.stringify(result.message);
                var _message=JSON.parse(message);

                if (_code!=='0000'){
                    alert(_message);
                    return false;
                }
                 refresh();
            },
            error:function() {
                alert("error");

            }


        });
    }

}
function savePercent01() {
    if (confirm("是否确定保存该单价？")) {
        // alert("准备推送："+pushId);
        var  planId1 = $('#input01').val();



        var percent = $('#percent01').text();
        console.log('plan'+planId1+'---'+'percent:'+percent);




        $.ajax({
            timeout: 10000,
            type: "POST",
            url: dataUrl+"/finance/savePercent.do",
            data:{'plan':planId1,'percent':percent},
            dataType:"json",

            success: function(result) {
                var code=JSON.stringify(result.code);
                var _code=JSON.parse(code);
                var message=JSON.stringify(result.message);
                var _message=JSON.parse(message);

                if (_code!=='0000'){
                    alert(_message);
                    return false;
                }
                 refresh();
            },
            error:function() {
                alert("error");

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

/**/

