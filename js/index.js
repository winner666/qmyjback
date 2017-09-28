

  





$(function(){ 
	
//　  $.ajax({
//              timeout: 10000,
//              url:dataUrl+'/index/queryIndex.do',
//              type: 'POST',
//               contentType:'application/json;charset=utf-8',
//              data: {},
//              dataType: JSON,
//              success: function (result) {
//                  console.log(result);
//                  var dataObj = eval("(" + result + ")");//转换为json对象
//                  console.log(dataObj);
//                  if (dataObj.code === '0000') {
//                      $("#userCount").text(dataObj.userCount);
//                      $("#orderTotalAmt").text(dataObj.totalAmt);
//                      $("#orderNumber").text(dataObj.orderNumber);
//                      return true;
//                  }
//              },
//              error:function(res)
//              {               	
//              	console.log(res);
//              }
//              
//          }
//      );
        
        
        $.ajax({
						type: "POST",
						url:dataUrl+'/index/queryIndex.do',
						async: true,
						data: {},
//						dataType: JSON,
						success: function (data) {
						//console.log(data)
						if(data.code==0000){
								$("#userCount").text(data.userCount);
                 $("#orderTotalAmt").text(data.totalAmt);
                  $("#orderNumber").text(data.orderNumber);
							}
						},
						error:function(res){

							
						}
						})       
}); 





