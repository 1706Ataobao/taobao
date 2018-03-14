var phone=/^1[34578]\d{9}$/;
var pass=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
var shouji = false;
var mima = false;
$('.phone').blur(function(){
    var oPhone = $(this).val()
    if(oPhone ==''){
        $('.textphone').text('请输入手机号')
        shouji = false;
    }else if(phone.test(oPhone)){
        $('.textphone').text('输入正确')
        shouji = true;
    }else{
        $('.textphone').text('输入有误')
        shouji = false;
    }
})
$('.pass').blur(function(){
    var oPass = $(this).val()
    if(oPass ==''){
        $('.textpass').text('请输入密码')
        mima = false
    }else if(pass.test(oPass)){
        $('.textpass').text('输入正确')
        mima = true
    }else{
        $('.textpass').text('输入有误')
        mima = false
    }
}) 
$('.btn').click(function(){
    var oPhone=$('.phone').val();
    var oPass=$('.pass').val();
    if(shouji&&mima){
		$.ajax({
			type:"post",
			url:"http://47.92.37.168/supermarket/data/register.php",
		    async:true,
			data:{
				'user_phone':oPhone,
				'user_pass_word':oPass
			},
			dataType:"jsonp",
			jsonp:"callback",
			jsonpCallback:"success_JsonpCallback",
			success:function(data){
				console.log(data);
				if (data.msg=='success') {
                    alert('注册成功！');
                    location.href="login.html"
				} else if(data.msg=='error'){
					alert('该手机号已经被注册')
				}
			}
		})
    }
})