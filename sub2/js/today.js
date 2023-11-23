    
    // $('.information .seoul').show(); // 첫번째 탭 내용만 열어라
    // $('.seoul .trigger:eq(0)').css('background','#ed8b00').css('color','#fff'); //첫번째 탭메뉴 활성화
    //         //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    // $('.seoul li:eq(0) .a').show();


    $(document).ready(function(){
        var cnt=$('.information .infor').size();  //탭메뉴 개수 ***
        // $('.information .zoneset').find('.zone:eq(0)').show(); // 첫번째 탭 내용만 열어라
        // $('.information .infor1').css('background','#ed8b00').css('color','#fff'); //첫번째 탭메뉴 활성화
        // $('.information .zone:eq(0)').find('.trigger:first').css('background','#ed8b00').css('color','#fff'); //첫번째 탭메뉴 활성화
        // $('.zone .article:first').find('.a:first').show();
                   //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

          $('.zone .trigger').click(function(e){
              e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
              
              var ind = $(this).parents('.zone').index('.zone');  // 클릭시 해당 index를 뽑아준다
              // console.log(ind);
              var bin = $(this).attr('.current')
              
              $(".zoneset .zone").hide(); //모든 탭내용을 안보이게...
              $(".zoneset .zone:eq("+ind+")").css('width','1000px').show(); //클릭한 해당 탭내용만 보여라
              $("#return_box").show();
              $(".zone:eq("+ind+") .trigger").find('.a').show();
              $(".zone:eq("+ind+") .trigger").parent('.article').css('background','#fff');
            //   $(".zone:eq("+ind+") .article").find('.a:first').show();
              $(".information .zone:eq("+ind+")").find('.trigger').css('background','#ed8b00').css('color','#fff'); //첫번째 탭메뉴 활성화
              $('.trigger').removeClass('current').css('background','#f5f5f5').css('color','#ccc'); //모든 탭메뉴를 비활성화
              $(this).addClass('current').css('background','#ed8b00').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화



              // $('.trigger').hover(function() {
              //   $(this).css("color", "#fff").css('background','#ed8b00');
              // }, function(){
              //   $(this).css("color", "#ccc").css('background','#f5f5f5');
              // });

              // $(this).css('background','#ed8b00').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화
         });

    

         $("#return_box").click(function(e){
            e.preventDefault();
              $('.today #return_box').hide();
            //   $(".zoneset .zone:eq("+ind+")").hide();
              location.reload().fadeIn();
          });
       
      
      });


     

    var article = $('.information .article');  //모든 질문 답변 리스트
    
        $('.information .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
            e.preventDefault();  //<a href="#"> 태그 링크 처리
            var myArticle = $(this).parent('.article'); //클릭한 해당 list 
        
            if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
                article.find('.a').slideUp('swing'); //모든 답변을 닫아라
                article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
                article.children('.trigger').css('background','#f5f5f5').css('color','#ccc');

                myArticle.removeClass('hide').addClass('show');
                myArticle.children('.trigger').css('background','#ed8b00').css('color','#fff');  // show로 바꾼다 
                myArticle.find('.a').slideDown('swing');  //해당 리스트의 답변을 열어라
                
            } else {  // 'show' 답변이 열려있냐??
                myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
                myArticle.find('.a').slideUp('swing');  //해당 리스트의 답변을 닫아라
                
        }           
    });

    // $('.zone').on('scroll', function(){
    //   var 스크롤양 = document.querySelector('.zone').scrollTop;
    //   var 실제높이 = document.querySelector('.zone').scrollHeight;
    //   console.log(스크롤양, 실제높이);
    // });

    // lorem.on("scroll", function(){
    //   if(lorem.scrollTop() + lorem.innerHeight() >= lorem.prop('scrollHeight')-10){
    //       alert("통과");
    //   }
  //})