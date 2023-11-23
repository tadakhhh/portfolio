var article = $('process li');  //모든 질문 답변 리스트
    
        $('process li').click(function(){  // 각각의 질문을 클릭하면
              //<a href="#"> 태그 링크 처리
            var myArticle = $(this).parent('.article'); //클릭한 해당 list 
        
            if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
                article.find('.a').slideUp('swing'); //모든 답변을 닫아라
                article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체

                myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
                myArticle.find('.a').slideDown('swing');  //해당 리스트의 답변을 열어라  
            } else {  // 'show' 답변이 열려있냐??
                myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
                myArticle.find('.a').slideUp('swing');  //해당 리스트의 답변을 닫아라  
        }  
    });