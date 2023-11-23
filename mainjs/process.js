$(document).ready(function(){
     
    
    var timeonoff;
    var imageCount=9;  
    var cnt=1;		

    function move_gallery(){
        cnt++;

        $('.eventSlideMenu ul li').removeClass('current');
        $('.eventSlideMenu ul li:eq('+ (cnt-1) +')').addClass('current'); //현재 cnt에 맞는놈만 넣어줌
	  
	  
	   if(cnt==imageCount)cnt=0;
       }
	
       //timeonoff= setInterval(move_gallery, 4000);
    
    $('.eventSlideMenu ul li:eq(0)').addClass('current');
    $('.eventSlideMenu ul li:eq(0)').find('dd').show() 

    $('.eventSlideMenu ul li span').click(function(e){ //처음 시작시 첫번째 li에 current클래스 추가 애니메이션
        e.preventDefault();
       var $target=$(e.target);  // var $target = $(this)

      clearInterval(timeonoff); //죽인다.
     $('.eventSlideMenu ul li').removeClass('current');
     $(this).parent().addClass('current');  //마우스오버한 메뉴버튼의 li만 current클래스 추가
     $(this).css('current');
     $(this).find('dd').show()
     
     
     var lip = $('.eventSlideMenu ul li');  //모든 질문 답변 리스트
     var lipc = $(this).parent();
     var ddd = $(this).prev('dl');
     console.log(ddd); //클릭한 해당 list 
     
         if(lipc.width('150px')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            lip.css('width','150px'); //모든 답변을 닫아라
            lip.children('span').css('width','150px');
            lip.children('dl').css('width','150px');
            lipc.css('width','600px');  // show로 바꾼다
            lipc.children('span').css('width','600px');
            lipc.children('dl').css('width','600px');
            lipc.find('dd').fadeIn('slow');
         }else if(ipc.width('150px')){
            ipc.find('dd').hide();
            ipc.css('filter','brightness(80%)');
        }
      
    });
 });

 