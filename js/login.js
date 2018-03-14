$('.btn').click(function(){
    var oPhone = $('.phone').val()
    var oPass = $('.pass').val()
    if(oPhone!='' && oPass!=''){
        $.ajax({
			type:"post",
			url:"http://47.92.37.168/supermarket/data/login.php",
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
                    alert('登录成功！');
				} else if(data.msg=='error'){
					alert(data.reason)
				} 
			}
		})
    }
})