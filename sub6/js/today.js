var cnt=$('.information div').size();
    $('.store .map_search').show();

var cla=$('svg path').attr('class');
    console.log(cla);


    $('svg path').hover
        (function() {
            $(this).css('stroke','rgba(237,139,0,1)').css('stroke-width','3').css({transition: 'all ease .5s'});
        }, function(){
            $('svg path').not(cla).css('stroke','rgba(204,204,204,1)').css('stroke-width','1').css({transition: 'all ease .5s'});
            });
    

    $('svg path').click(function(){
        $(this).css('fill','rgba(237,139,0,1)').css({
            transform: 'translateY(-10px)'}).css({transition: 'all ease .7s'});
        $('svg path').not(this).css('fill','rgba(245,245,245,1)').css({
            transform: 'translateY(0px)'}).css({transition: 'all ease .7s'});

        var ind = $(this).attr("class");
        console.log(ind);
        
        $('.store .map_search').hide();
        $('.information').show();
        $('.information div').hide();
        $('.information .a').hide();


    if(ind=='seoul'){  //서울
        $('.information').children('div:eq(1)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
        
    }else if(ind=='gyeonggi'){  //경기
        $('.information').children('div:eq(2)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
    }else if(ind=='incheon'){  //인천
        $('.information').children('div:eq(3)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
    }else if(ind=='gangwon'){  //강원
        $('.information').children('div:eq(4)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();  
    }else if(ind=='chungnam'){  //충남
        $('.information').children('div:eq(5)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show(); 
    }else if(ind=='chungbuk'){  //충북
        $('.information').children('div:eq(6)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
    }else if(ind=='daejeon'){  //대전
        $('.information').children('div:eq(7)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
    }else if(ind=='gyeongbuk'){  //경북
        $('.information').children('div:eq(8)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
    }else if(ind=='gyeongnam'){  //경남
        $('.information').children('div:eq(9)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
    }else if(ind=='daegu'){  //대구
        $('.information').children('div:eq(10)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();  
    }else if(ind=='busan' ){  //부산
        $('.information').children('div:eq(11)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();  
    }else if(ind=='ulsan'){  //울산
        $('.information').children('div:eq(12)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
    }else if(ind=='jeonbuk'){  //전북
        $('.information').children('div:eq(13)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();
    }else if(ind=='jeonnam'){  //전남
        $('.information').children('div:eq(14)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();  
    }else if(ind=='gwangju'){  //광주
        $('.information').children('div:eq(15)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();  
    }else if(ind=='jeju'){  //제주
        $('.information').children('div:eq(16)').fadeIn('slow');
        $('.information .scroll1').show();
        $('.information .scroll2').show();    
    }                  
});        

    var article = $('.information .article');  //모든 질문 답변 리스트
    
        $('.information .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
            e.preventDefault();  //<a href="#"> 태그 링크 처리
            var myArticle = $(this).parent('.article'); //클릭한 해당 list 
        
            if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
                article.find('.a').slideUp('swing'); //모든 답변을 닫아라
                article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
                article.css({ //이렇게도 쓸 수 있으며 제일 낫다
                    "border":"none",
                    "border-radius":"none",
                    "font-weight": "400"
                });

                myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
                myArticle.find('.a').slideDown('swing');  //해당 리스트의 답변을 열어라
                myArticle.css({ //이렇게도 쓸 수 있으며 제일 낫다
                    "border":"2px solid #ed8b00",
                    "border-radius":"5px",
                    "font-weight": "500"
                });
            } else {  // 'show' 답변이 열려있냐??
                myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
                myArticle.find('.a').slideUp('swing');  //해당 리스트의 답변을 닫아라  
        }  
    });