$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham, #headerArea .box").click(function(e) { //메뉴버튼 클릭시
      e.preventDefault(); 

       var documentHeight =  $(document).height(); //전체 페이지의 높이
       $("#gnb").css('height',documentHeight); //gnb의 높이를 전체 페이지 높이와 동일

      if(op==false){
        $("#gnb").animate({left:0,opacity:1}, 'fast');
        op=true;
        $('#headerArea .box').show();
      }else{
        $("#gnb").animate({left:'-100%',opacity:0}, 'fast');
        op=false;
        $('#headerArea .box').hide();
      }

   });
   
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false]; //각각의 1depth 메뉴의 열림(true)/닫힘(false) 변수
    var arrcount=onoff.length; //4개
    
    //console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(e){
      e.preventDefault();
        var ind=$(this).parents('.depth1').index();
        //var ind = $(this).index('#gnb .depth1 h3 a');
        
        //console.log(ind);

        
       if(onoff[ind]==false){
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
         for(var i=0; i<arrcount; i++) onoff[i]=false; 
         onoff[ind]=true;
         $('#gnb .depth1 h3 a').css('color', '#333');
           
         $('.depth1 span').html('<i class="fa-solid fa-angle-down"></i>').css('color','#333');   
         $(this).find('span').html('<i class="fa-solid fa-angle-up"></i>').css('color','#333');   
         $(this).css('color', '#ed8b00');
       }else{
         $(this).parents('.depth1').find('ul').slideUp('fast');
         onoff[ind]=false;   
           
         $(this).find('span').html('<i class="fa-solid fa-angle-down"></i>');  
         $(this).css('color', '#333');   
       }

    });    
  
    // 스크롤 처리
    var visual_height = $('.visual').height()-80;

    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
      
      var scroll = $(window).scrollTop(); //스크롤의 거리

      if(scroll>visual_height){ //500이상의 거리가 발생되면
          $('#headerArea').css('background', 'rgba(255,255,255,1)').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.3)');  //top보여라~~~~
          $('#headerArea ').addClass('down');

      }else{
          $('#headerArea').css('background', 'rgba(255,255,255,.6)').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,0)');//top안보여라~~~~
          $('#headerArea ').removeClass('down');
          
      }

    });

  });


  //top이동
  $('.topMove').hide();
  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();

    if(scroll>500){
      $('.topMove').fadeIn('slow');
    }else{
      $('.topMove').fadeOut('fast');
    }
    });

  $('.topMove').click(function(e){
  e.preventDefault();
  //상단으로 스르륵 이동합니다.

  $("html,body").stop().animate({"scrollTop":0},1000);
  });


