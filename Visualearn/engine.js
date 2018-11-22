
$(document).ready(function() {
	var boxH;

	$("#search").click(function(){
		boxH = $("#textarea").height()+22;
		console.log(boxH)
		$("#UserField").animate({opacity:0,height:0},300);
		$(".progress").animate({opacity:1},300);
		$(".progress-bar").animate({width:"100%"},2000);

		setTimeout(function(){
			$(".progress").animate({opacity:0},100);
			$(".progress").promise().done(function(){
				$("#edit").css({"display":"block","opacity":"1"});
				$("#vidoe").css({"display":"block","opacity":"1","height":"502px"});
				$(".progress-bar").css({"width":"0%"});
			});
		},2800);
	})
	
	$("#edit").click(function(){
	 	$(this).animate({opacity:0},100);
	 	$("#vidoe").animate({height:0,opacity:0},100);
		$("#UserField").animate({opacity:1,height:boxH+"px"},300);
	
	 	$("#UserField").promise().done(function(){
	 		$("#edit").css("display","none");
	 		$("#UserField").css("height","auto");
	 	});
	});
})
