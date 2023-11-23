$(document).ready(function () {
        
    $('.subNav li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
   // $('.info section:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    
    var smh=1240;  //메인 비주얼의 높이
    var h1= $('.info section:eq(1)').offset().top-600 ;
    var h2= $('.info section:eq(2)').offset().top-600 ;
    var h3= $('.info section:eq(3)').offset().top-600 ;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('.navBox').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.navBox').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
        
        
        
        $('.subNav li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<h1){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
           // $('.info section:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h1 && scroll<h2){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
            // $('.info section:eq(1)').addClass('boxMove');
        }else if(scroll>=h2 && scroll<h3){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
            // $('.info section:eq(2)').addClass('boxMove');
        }else if(scroll>=h3){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
           //  $('.info section:eq(3)').addClass('boxMove');
        }
        
        
        
     /*   
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<500){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=500 && scroll<1100){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove');
        }else if(scroll>=1100 && scroll<1500){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove');
        }else if(scroll>=1500){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('#content div:eq(3)').addClass('boxMove');
        }
        
    */    
        
    });


});


$('.subNav li a').click(function(e){
    e.preventDefault(); //href="#" 속성을 막아주는..메소드

     var value=0; //이동할 스크롤의 거리

     if($(this).is('.subNav li:eq(0) a')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
        value= $('.info section:eq(0)').offset().top;  // 해당 콘테츠의 상단의 거리~~
        //.offset().top; 째로 외워라. offset이 반경이래. 위쪽반경.
     }else if($(this).is('.subNav li:eq(1) a')){
        value= $('.info section:eq(1)').offset().top; 
     }else if($(this).is('.subNav li:eq(2) a')){
        value= $('.info section:eq(2)').offset().top; 
     }else if($(this).is('.subNav li:eq(3) a')){
        value= $('.info section:eq(3)').offset().top; 
     }

     value-=80; //백만큼 덜가기~
     
   $("html,body").stop().animate({"scrollTop":value},1000);
 });
