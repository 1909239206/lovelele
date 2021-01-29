// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("小姐姐在考虑一下呗");
	   }else if(Dianji==2){
		   		alert("你是我见过的最可爱开朗的女孩");
		   		
	   }else if(Dianji==3){
		   		alert("所有的温暖只给你一人");
		   		
	   }else if(Dianji==4){
		   		alert("吵架了会跟你道歉");
		   		
	  }else if(Dianji==5){
		   		alert("给你足够的安全感");
	  }else if(Dianji==6){
		   		alert("对你永远不会没时间");
	  }else if(Dianji==7){
		   		alert("永远不会丢下你一个人");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("小姐姐终于同意了，我爱你");
	}
	

}