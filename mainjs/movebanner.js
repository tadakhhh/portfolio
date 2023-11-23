// JavaScript Document

$(document).ready(function() {
	var position=0;  //최초위치(left목적지)
	var movesize=6; //이동 크기(속도)
	var timeonoff2; //자동기능
	
	$('.partnerBox').after($('.partnerBox').clone()); //복재
	// $('가져다 놓을 태그').after('기준태그');
	
	function partnerMove(){
			 position-=movesize;  // 2씩 감소
		 $('.partner').css('left',position);
	 
		if(position < -3300){
				$('.partner').css('left',-600);
				position=-600;
		} 
	 
	};

		timeonoff2= setInterval(partnerMove, 100);
	 
		$('.partner').hover(function(){
			clearInterval(timeonoff2);
		},function(){
			timeonoff2= setInterval(partnerMove, 100);	
		});
	 
  });