$(document).ready(function(){
	var flag = true;
	$(".member").click(function(){
		var clicked_id = this.id;
		console.log(clicked_id);
		if(flag){
			$(".info-front-" + clicked_id).css({
				"transform" : "translate3d(0,200px,0) rotate3d(1,0,0,90deg)",
				"opacity": "0"
			});
			console.log("working!");
			$(".info-back-" + clicked_id).css({
				"transform" : "rotate3d(1,0,0,0deg)",
				"opacity" : "1"
			});
			console.log("yeah!");
			flag = !(flag);
		}
		else{
			$(".info-back-" + clicked_id).css({
				"transform" : "translate3d(0,200px,0) rotate3d(1,0,0,-90deg)",
				"opacity" : "0"
			});
			console.log("yeah!");
			$(".info-front-" + clicked_id).css({
				"transform" : "rotate3d(0,1,0,0deg)",
				"opacity": "1"
			});
			console.log("working!");
			flag = !(flag);
		}
	});

});
