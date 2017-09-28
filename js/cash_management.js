/**
 * Created by Rust on 2017/5/25.
 */

	

    //获取提现流水信息
    var pageNum=1;//当前页数
	var pageSize=10;//当前每页条数
	var totalCount;
    getCashSsnRecord(pageNum);

function getCashSsnRecord(pageNum) {

    $.ajax({
        timeout: 10000,
        type: "POST",
        url:dataUrl+'/finance/withdrawalsList.do',
        contentType: 'application/json;charset=utf-8',
		dataType: "JSON",
		async:false,
		data:JSON.stringify({       
        	"pageNumber":pageNum,
            "pageSize":pageSize
        }),
        dataType: "json",
        success: function(result){
            console.log(result);
            totalCount=Math.ceil(result.total/pageSize);
            var crmHtmlz2 = '';
            var list=result.obj;
            if(list.length!=0){         
	            for(var i=0;i<list.length;i++){
	            	var year=list[i].ssnCrtDateTime.substring(0,4);
									var month=list[i].ssnCrtDateTime.substring(4,6);
									var data=list[i].ssnCrtDateTime.substring(6,8);
									var  hour=list[i].ssnCrtDateTime.substring(8,10);
									var minute=list[i].ssnCrtDateTime.substring(10,12);
									var second=list[i].ssnCrtDateTime.substring(12,14);
									//console.log(year,month,data,hour,minute,second)
									time=year+'-'+month+'-'+data+' '+hour+':'+minute+':'+second;
	            	
	            	  crmHtmlz2 += "<tr>";
	            	   crmHtmlz2 += "<td class='hidden-phone'>"+list[i].customerName+"</td>"
	            	   crmHtmlz2 +=  "<td>"+list[i].moblNo+"</td>"
	            	   crmHtmlz2 += "<td>"+list[i].txnAmt+"</td>"
	            	   if(list[i].txnChannel=='wx_pub'){
	            	   	 crmHtmlz2 +="<td>微信</td>"
	            	   }else if(list[i].txnChannel=='alipay'){
	            	   	crmHtmlz2 +="<td>支付宝</td>"
	            	   }
	            	   
	            	     crmHtmlz2 +="<td>"+time+"</td>"
	            	     if(list[i].pagyTxnStat=='pending'){
	            	     	crmHtmlz2 +="<td>交易成功</td>"
	            	     }
	            	      if(list[i].pagyTxnStat=='ping++'){
	            	     	crmHtmlz2 +="<td>交易付款中</td>"
	            	     }else if(list[i].pagyTxnStat==''){
	            	     	crmHtmlz2 +="<td>交易失败</td>"
	            	     }
	            	     
	            	      crmHtmlz2 +="</tr>";
	            }
	            $('.zhengyue').html(crmHtmlz2);
            }

        },
        error:function(result) {
            alert("error");
        }
    });		
}

$(".tcdPageCode").createPage({
			        pageCount:totalCount,
			        current:1,
			        backFn:function(p){	
			        	//console.log(p)
			          getCashSsnRecord(p)
			        }
			    });
