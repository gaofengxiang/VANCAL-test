/*处理cookie操作的函数(对函数做说明注释,增进程序员之间的感情,亲,你累了么,喝点红牛)*/
function getDate(n){
	var d = new Date();
	var day = d.getDate();
	day += n;
	d.setDate(day);
	return d;
}
function setCookie(name, value, expires, path, domain, isSecure){
	var cookieText = encodeURIComponent(name) + "=" +encodeURIComponent(value);
	//判断是否进行传参
	/*if(expires){
		cookieText += ";expires=" + expires;
	}*/
	if(expires instanceof Date){ //判断当前传入的参数是否是一个日期对象(这样判断更加严谨)
		cookieText += ";expires=" + expires;
	}
	if(path){
		cookieText += ";path=" + path;
	}
	if(domain){
		cookieText += ";domain" + domain;
	}
	if(isSecure){ //true/false
		cookieText += ";secure";
	}
	document.cookie = cookieText;
}


//【注】传入对应的健,获取cookie缓存中对应的值
function getCookie(name){
	var cookieText = decodeURIComponent(document.cookie);
	//1.首先找到键的位置
	var start = cookieText.indexOf(name);
	if(start == -1){
		return;
	}else{
		//找到结束下标
		var end = cookieText.indexOf(";", start);
		if(end == -1){
			end = cookieText.length;
		}
	}
	//3.字符串提取
	var str = cookieText.substring(start, end);
	//4.字符串分割
	var arr = str.split("=");
	return arr[1];
}



function removeCookie(name){
	document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);
}


/*获取当前样式的方法*/
function getStyle(element, style){
	if(element.currentStyle){
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
}



		//生成验证码(字母数字组合)
		//A 65 ~ 90
		//a 97 ~ 122  10 ~ 35 + 87
		//数字 0 ~ 9

		//随机 0 ~ 99 的数  parseInt(Math.random() * 100);

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


//封装获取元素节点的方法
function $(id){
	return document.getElementById(id);
}


//判断当前字符是否是字母下划线
function isTrueChar(charStr){
	if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr == "_"){
		return true;
	}else{
		return false;
	}
}

function isTrueName(charStr){
	if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr == "_" || charStr >= "0" && charStr <= "9"){
		return true;
	}else{
		return false;
	}
}












