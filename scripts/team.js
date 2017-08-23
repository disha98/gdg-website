$(document).ready(function(){
	var flag = new Array(11).fill(true);
	$(".member").click(function(){
		var clicked_id = this.id;
		//console.log(clicked_id);
		if(flag[clicked_id]){

			$(".info-back-" + clicked_id).css({
				"transform" : "translate3d(0,0,0) rotate3d(0,1,0,0deg)",
				"opacity" : "1"
			});

			$(".info-front-" + clicked_id).css({
				"transform" : "translate3d(0,200px,0) rotate3d(1,0,0,90deg)",
				"opacity": "0"
			});
			//console.log("working1!");
			//console.log("yeah1!");
			flag[clicked_id] = !(flag[clicked_id]);
		}
		else{

			$(".info-front-" + clicked_id).css({
				"transform" : "rotate3d(0,1,0,0deg)",
				"opacity": "1"
			});

			$(".info-back-" + clicked_id).css({
				"transform" : "rotate3d(1,0,0,90deg)",
				"opacity" : "0"
			});
			//console.log("yeah2!");
			//console.log("working2!");
			flag[clicked_id] = !(flag[clicked_id]);
		}
	});

});

