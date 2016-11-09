window.onload = function(){
	$("#code_p").get(0).innerHTML = testCode(4);
	$("#code_p").click(function(){
		$(this).get(0).innerHTML = testCode(4);
	})
	$("#common").click(function(){
		$("#right_bot").show();
		$("#right_fast").hide();
		$(this).css("background", "#B42025").css("color", "white");
		$("#fast").css("background","white").css("color", "black");
	})
	$("#fast").click(function(){
		$("#right_bot").hide();
		$("#right_fast").show();
		$(this).css("background", "#B42025").css("color", "white");
		$("#common").css("background","white").css("color", "black");
	})

}
function testCode(n){ //传入n,生成n位的验证码
	var arr = []; //记录每一次生成的验证码
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random() * 100);
		if(num >= 0 && num <= 9){
			arr.push(num);
		}else if(num >= 10 && num <= 35){
			var charStr = String.fromCharCode(num + 87);
			arr.push(charStr);
		}else if(num >= 65 && num <= 90){
			var charStr = String.fromCharCode(num);
			arr.push(charStr);
		}else{
			i--; //再去将那次无用操作补回来
		}
	}
	return arr.join("");
}