(function ($) {

	$(".name,.password,.email,.f-input,.search-in,.date-in,.currency-in ").on("focus",function(){
		$(this).css({"border-color": "rgba(25,118,210, 0.4)", "box-shadow": " 0px 1px 20px 0px rgba(25,118,210, 0.4)" , "outline":"none"})
	});
	$(".name,.password,.email,.f-input ").on("blur",function(){
		$(this).css({"border-color": "#ddd", "box-shadow": " 0px 0.5px 10px 0px rgba(0, 0, 0, 0.3)" , "outline":"none"})
	});

	 
	$(".search-in,.date-in,.currency-in").on("blur",function(){
		$(this).css({"border-color": "#ddd", "box-shadow": " 0px 0.5px 10px 0px rgba(0, 0, 0, 0.3)" , "outline":"none"})
	});


	$(".name").on("focus",function(){
		$(".fa-user").css("color","#39f")
	});

	$(".name").on("blur",function(){
		$(".fa-user").css("color","#888")
	});

	$(".password").on("focus",function(){
		$(".fa-lock").css("color","#39f")
	});

	$(".password").on("blur",function(){
		$(".fa-lock").css("color","#888")
	});


	$(".email").on("focus",function(){
		$(".fa-envelope").css("color","#39f")
	});

	$(".email").on("blur",function(){
		$(".fa-envelope").css("color","#888")
	});

})(jQuery);
