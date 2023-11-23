// qna

$(document).ready(function () {
	var article = $('.faq .article');  //모든 질문 답변 리스트
	//article.find('.a').slideUp(100); // 모든 답변 닫아라
    article.find('span').html('<i class="fas fa-chevron-down"></i>');
    $('.faq .article:first').find('.a').slideDown(100);
    $('.faq .article:first').find('span').html('<i class="fas fa-chevron-up"></i>');
	
	$('.faq .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.a').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fas fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
        }  
  });
  
  //모두 여닫기 처리
  $('.all').toggle(function(e){
        e.preventDefault(); 
        article.find('.a').slideDown(100);
        article.removeClass('hide').addClass('show');
        article.find('span').html('<i class="fas fa-chevron-up"></i>');
        $(this).text('전체보기').html('전체보기 <i class="fa-solid fa-caret-up"></i>');
  },function(e){
        e.preventDefault(); 
        article.find('.a').slideUp(100);
        article.removeClass('show').addClass('hide');
        article.find('span').html('<i class="fas fa-chevron-down"></i>');
        $(this).text('전체보기').html('전체보기 <i class="fa-solid fa-caret-down">');
  });

});

// qna 카테고리

$(document).ready(function(){
    $('.qnas .article').show(); // 첫번째 탭 내용만 열어라
    $('.qna_menu li').css('background','#f5f5f5').css('color','#333');
    $('.qna_menu li:eq(0)').css('background','#ed8b00').css('color','#fff'); //첫번째 탭메뉴 활성화
    $('.qna_menu li:eq(0)').find('img').css("filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(220deg) brightness(100%) contrast(100%)");
    $('.qna_menu li:eq(0)').find('p').css("color", "#fff");
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    

    $('.qna_menu .qna').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

          $(this).find('.qnas ul:eq(1) li:first').slideDown(100);
          $('.faq .article:first').find('.a').slideDown(100);

          $(this).find('img').css("filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(220deg) brightness(100%) contrast(100%)");
          $(this).find('p').css("color", "#fff");
          $('.qna_menu .qna').not(this).find('img').css("filter", "none");
          $('.qna_menu .qna').not(this).find('p').css("color", "#333");




         if($(this).hasClass('qna1')){
            $('.qnas ul:eq(1) li').show();
            $('.faq .article:first').find('.a').slideDown(100);
            $('.faq .article:first').find('span').html('<i class="fas fa-chevron-up"></i>');
            $('.faq .article').not('.faq .article:first').find('.a').slideUp(100);
            $('.faq .article').not('.faq .article:first').find('span').html('<i class="fas fa-chevron-down"></i>');
         }else if($(this).hasClass('qna2')){
            $('.qnas ul:eq(1) li').hide();
            $('.qnas ul:eq(1) li.enterprise').show();
            $('.faq .enterprise:first').find('.a').slideDown(100);
            $('.faq .enterprise:first').find('span').html('<i class="fas fa-chevron-up"></i>');
            $('.faq .enterprise').not('.faq .enterprise:first').find('.a').slideUp(100);
            $('.faq .enterprise').not('.faq .enterprise:first').find('span').html('<i class="fas fa-chevron-down"></i>');
         }else if($(this).hasClass('qna3')){
            $('.qnas ul:eq(1) li').hide();
            $('.qnas ul:eq(1) li.ware').show();
            $('.faq .ware:first').find('.a').slideDown(100);
            $('.faq .ware:first').find('span').html('<i class="fas fa-chevron-up"></i>');
            $('.faq .ware').not('.faq .ware:first').find('.a').slideUp(100);
            $('.faq .ware').not('.faq .ware:first').find('span').html('<i class="fas fa-chevron-down"></i>');
         }else if($(this).hasClass('qna4')){
            $('.qnas ul:eq(1) li').hide();
            $('.qnas ul:eq(1) li.restaurant').show();
            $('.faq .restaurant:first').find('.a').slideDown(100);
            $('.faq .restaurant:first').find('span').html('<i class="fas fa-chevron-up"></i>');
            $('.faq .restaurant').not('.faq .restaurant:first').find('.a').slideUp(100);
            $('.faq .restaurant').not('.faq .restaurant:first').find('span').html('<i class="fas fa-chevron-down"></i>');
         }else if($(this).hasClass('qna5')){
            $('.qnas ul:eq(1) li').hide();
            $('.qnas ul:eq(1) li.etc').show();
            $('.faq .etc:first').find('.a').slideDown(100);
            $('.faq .etc:first').find('span').html('<i class="fas fa-chevron-up"></i>');
            $('.faq .etc').not('.faq .etc:first').find('.a').slideUp(100);
            $('.faq .etc').not('.faq .etc:first').find('span').html('<i class="fas fa-chevron-down"></i>');
         }

          $('.qna_menu li').css('background','#f5f5f5').css('color','#333'); //모든 탭메뉴를 비활성화
          $(this).parent('.qna_menu li').css('background','#ed8b00').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

     });

  });

