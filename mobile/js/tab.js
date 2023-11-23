// JavaScript Document

$(document).ready(function(){
  var cnt=$('.feature ul li').size();  //탭메뉴 개수 ***
  $(".feature .swiper4").hide();
  $('.feature .swiper4:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('.features .fea1').css('background','#ed8b00').css('color','#fff'); //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.features .fea').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        $('.features').css('height','auto');
        var ind = $(this).index('.features .fea');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".features .swiper4").hide(); //모든 탭내용을 안보이게...
        $(".features .swiper4:eq("+ind+")").fadeIn(); //클릭한 해당 탭내용만 보여라
        $('.fea').css('background','#fff').css('color','#666').fadeIn('slow'); //모든 탭메뉴를 비활성화
        $(this).css('background','#ed8b00').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

   });
 

});