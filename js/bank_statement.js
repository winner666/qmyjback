/**
 * Created by Rust on 2017/5/25.
 */
    var totalCount;
    var pageNum=1;
    var pageSize=10;
function load() {
    //获取流水信息
    

    
    getSsnRecord(pageNum,pageSize);
   			
    $(".tcdPageCode").createPage({
			        pageCount:totalCount,
			        current:1,
			        backFn:function(p){
			        	
			          getSsnRecord(p,pageSize)
			        }
			    });	
    
}

function getSsnRecord(pageNum,pageSize) {

    // alert("准备发送流水查询请求");

    $.ajax({
        timeout: 10000,
        type: "POST",
        url:dataUrl+'/finance/queryTxnSsn.do',
        async:false,
        data:{
        	"pageNumber": pageNum,
			"pageSize": pageSize
        },
        dataType: "json",
        
        success: function(result){
            console.log(result);
            totalCount=Math.ceil(result.tatol/pageSize);
            var crmHtmlz2 = '';
         
            $.each(result,function(i,item){
                $.each(item,function(i,dd){
                	console.log(dd.ssnUpdDateTime)
                					var year=dd.ssnUpdDateTime.substring(0,4);
									var month=dd.ssnUpdDateTime.substring(4,6);
									var data=dd.ssnUpdDateTime.substring(6,8);
									var  hour=dd.ssnUpdDateTime.substring(8,10);
									var minute=dd.ssnUpdDateTime.substring(10,12);
									var second=dd.ssnUpdDateTime.substring(12,14);
									//console.log(year,month,data,hour,minute,second)
									time=year+'-'+month+'-'+data+' '+hour+':'+minute+':'+second;
                    crmHtmlz2 += "<tr>" +
                        "<td class='hidden-phone'>"+time+"</td>" +
                        "<td>"+dd.txnType+"</td>" +
                        "<td>"+dd.orderTxnAmt+"</td>" +
                        "<td>"+dd.txnChannel+"</td>" +
                        "</tr>";
                });
                $('.zhengyue').html(crmHtmlz2);                                              	
            }); 
          	
           	  	
        },
        error:function(result) {
            alert("error");
        }
        	
    });
      		 
}		

					

						