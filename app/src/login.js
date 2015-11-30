$(function(){
	var usernameFlag,passwordFlag,loginAble,logining;
	var loginBtn = $('#loginBtn');
	$('#username').keyup(function(){
		if($(this).val()){
			usernameFlag = true;
		}else{
			usernameFlag = false;
		}
		updateBtn();
	})
	$('#password').keyup(function(){
		if($(this).val()){
			passwordFlag = true;
		}else{
			passwordFlag = false;
		}
		updateBtn();
	});
	function updateBtn(){
		if(usernameFlag && passwordFlag){
			loginAble = true;
			loginBtn.removeClass('btn-default').addClass('btn-success');
		}else{
			loginBtn.removeClass('btn-success').addClass('btn-default');
			loginAble = false;
		}
	}
	loginBtn.click(function(){
		if(loginAble && !logining){
			logining = true;
			$.ajax({
				url:"/data/login.json",
				type:'get',
				dataType:"json",
				success:function(data){
					logining = false;
					if(data.username === $('#username').val() && data.password === $('#password').val()){
						window.location.href = '/index.html';
					}else{
						alert('username or password is not correct.');
					}
				},
				error:function(){
					logining = false;
				}
			})
		}
	});
});