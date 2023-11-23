




$('.circle1').hover
(function() {
        $(this).css('background-color', 'rgba(237,139,0,1)').css({transition: 'all ease .5s'});
        $('.circle1 span').css('color','#fff');
    }, function(){
        $(this).css('background-color', 'rgba(255,255,255,1)').css({transition: 'all ease .5s'});
        $('.circle1 span').css('color','#333');
    });
    
    
    
    $(document).ready(function(){
    $('.circle1').toggle(
     function(){
         $(this).css('background-color', 'rgba(237,139,0,1)').css({transition: 'all ease .5s'});
         $('.ideal li dl').css('background-color', 'rgba(255, 255, 255, .8)').css('border-radius', '10px');
        $('.ideal li dt').css({transform: 'translateY(-70px)'}).css('color', '#ed8b00');
        $('.ideal li dd').css('font-weight', '500').css('opacity', '1').css({transform: 'translateY(-70px)'});
    },
     function(){
        $(this).css('background-color', 'none').css({transition: 'all ease .5s'});
        $('.ideal li dl').css('background-color', 'rgba(255, 255, 255, 0)');
        $('.ideal li dt').css({transform: 'translateY(0px)'}).css('color', '#333');
        $('.ideal li dd').css('opacity', '0');
    }
    );
});


    $('.ideal li').hover
    (function() {
        $(this).children('img').css({transform: 'translatey(-20px)'});
        $(this).children('i').css('color', '#ed8b00').css({transform: 'translatey(-20px)'});
        $(this).children('dl').css('background-color', 'rgba(255, 255, 255, .8)').css('border-radius', '10px');
        $(this).find('dt').css({transform: 'translateY(-70px)'}).css('color', '#ed8b00');
        $(this).find('dd').css('font-weight', '500').css('opacity', '1').css({transform: 'translateY(-70px)'});
    }, function(){
        $(this).children('img').css({transform: 'translatey(0px)'});
        $(this).children('i').css('color', '#333').css({transform: 'translatey(0px)'});
        $(this).children('dl').css('background-color', 'rgba(255, 255, 255, 0)');
        $(this).find('dt').css({transform: 'translateY(0px)'}).css('color', '#333');
        $(this).find('dd').css('opacity', '0');
    });
