$(function(){
	$("#tex_phone").click(function(){
		$("#phone_span").html("请填写真实的手机号，并进行验证").css("color","#999999").css("fontSize","12px");
		$(".get_div").css("marginTop","0");
	}).blur(function(){
		var str = $(this).val();
		str.replace(/\s+/g,"")
		if(/^[1]\d{10}$/.test(str)){
			$("#phone_span").html("");
			$(".get_div").css("marginTop","15px");
		}else{
			$("#phone_span").html("请输入有效的手机号码").css("color","#B81E20").css("fontSize","12px");
			$(".get_div").css("marginTop","0");
		}
	})
	$("#get_code").click(function(){
		$("#get_span").html("请填写手机接收到的手机验证码").css("color","#999999").css("fontSize","12px");
		$(".pass_div").css("marginTop","0");
	}).blur(function(){
		var str = $(this).val();
		str.replace(/\s+/g,"")
		if(/^d\{6}$/.test(str)){
			$("#get_span").html("");
			$(".pass_div").css("marginTop","15px");
		}else{
			$("#get_span").html("输入的验证码错误，请重试").css("color","#B81E20").css("fontSize","12px");
			$(".pass_div").css("marginTop","0");
		}
	})
	$("#password").click(function(){
		$("#pass_span").html("6-16位字符，可使用字母、数字或符号的组合").css("color","#999999").css("fontSize","12px");
		$(".code_div").css("marginTop","0");
	}).blur(function(){
		var str = $(this).val();
		str.replace(/\s+/g,"");
		if(str.length < 6 && str.length > 16){
		$("#pass_span").html("密码长度长度在6位到16位之间，请重新输入").css("color","#B81E20").css("fontSize","12px");
		$(".code_div").css("marginTop","0");
		}else{
			if(/^d\{6,16}$/.test(str)){
				$("#pass_span").html("密码强度:弱").css("color","green").css("fontSize","12px");
				$(".code_div").css("marginTop","0");
			}else if(/^\w{6,16}$/.test(str)){
				$("#pass_span").html("密码强度:中").css("color","green").css("fontSize","12px");
				$(".code_div").css("marginTop","0");
			}else if(/^\S{16}$/.test(str)){
				$("#pass_span").html("密码强度:强").css("color","green").css("fontSize","12px");
				$(".code_div").css("marginTop","0");
			}
		}
	})
	$("#get_password").click(function(){
		$("#code_span").html("请再次输入密码，两次必须输入一致").css("color","#999999").css("fontSize","12px");
		$(".read").css("marginTop","0");
	}).blur(function(){
		if($(this).val() != $("#password").val()){
			$("#code_span").html("两次输入不一致，请输入一致").css("color","#B81E20").css("fontSize","12px");
			$(".read").css("marginTop","0");
		}
	})
	var d = 0;
	$("#box").click(function(){
		d++;
		if(d % 2 == 0){
			$(".login").css("background","#9A9A9A")
		}else{
			$(".login").css("background","#B81E20")
		}
	})
})