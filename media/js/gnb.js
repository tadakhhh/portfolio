//스크롤 이동시 나타나는 top

$(window).on('scroll',function(){ 

    var scroll = $(window).scrollTop(); 

    if(scroll>1000){ 
        $('.top_Move').fadeIn('slow'); 
    }else{
        $('.top_Move').fadeOut('fast');
    }
});  


//top 클릭시 상단 스무스 이동

 $('.top_Move').click(function(e){
        e.preventDefault();

        $("html,body").stop().animate({"scrollTop":0},1000); 
 });


//스크롤 처리
// var visual_height = $('.videoBox').height()-80;

// $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면

// var scroll = $(window).scrollTop(); //스크롤의 거리

// if(scroll>visual_height){ //500이상의 거리가 발생되면
//     $('#headerArea').css('background', 'rgba(255,255,255,1)').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.3)');  //top보여라~~~~
//     $('#headerArea #gnb').css('background', '#fff');

// }else{
//     $('#headerArea').css('background', 'rgba(255,255,255,.8)').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,0)');//top안보여라~~~~
//     $('#headerArea #gnb').css('background', 'rgba(255,255,255,.8)');
// }
// });

var visual_height = $('.videoBox').height() - 80;

function updateHeaderStyles() {
    var scroll = $(window).scrollTop();

    if (scroll > visual_height) {
        $('#headerArea').css({
            'background': 'rgba(255,255,255,1)',
            'box-shadow': '1px 1px 10px 1px rgba(0,0,0,.3)'
        });
        $('#headerArea #gnb').css('background', '#fff');
    } else {
        $('#headerArea').css({
            'background': 'rgba(255,255,255,.8)',
            'box-shadow': '1px 1px 10px 1px rgba(0,0,0,0)'
        });
        $('#headerArea #gnb').css('background', '#fff');

        // 1024보다 크거나 같은 경우
        if (window.innerWidth <= 1024) {
            $('#headerArea #gnb').css('background', 'rgba(255,255,255,.8)');
        } else {
            $('#headerArea #gnb').css('background', 'none');
        }
    }
}

$(window).on('scroll resize', function () {
    updateHeaderStyles();
});

// 초기 스타일 설정
updateHeaderStyles();
 
// //  네비높이 맞추기(페이지 로딩시 1회)
// var screenSize = $(window).width();
// var winh =  $(document).height();

// if( screenSize > 1024){
//     $('#headerArea #gnb').height('auto');
// }else{
//     $('#headerArea #gnb').height(winh);
// }


var current = 0;

$(window).resize(function () {
// document.documentElement.clientWidth
    var screenSize = $(window).width();
    // console.log(screenSize)
    if (screenSize > 1024) {
        $("#headerArea #gnb").show();
        current = 1;
    }
    if (current == 1 && screenSize <= 1024) {
        $("#headerArea #gnb").hide();
        current = 0;
    }
});



//햄버거 메뉴
$('.menu_open').toggle(function() {
    $('#headerArea').css('background','#fff');
    $("#gnb").css('background','#fff').slideDown('slow');
    $(".menu_open span::before").css({
        "transform" : "rotate(45deg)",
        "top": "0"});
    $('#headerArea').addClass('mn_open');
}, function() {
    $("#gnb").slideUp('fast');
    $('#headerArea').css('background','rgba(255,255,255,.8)');
    $('#headerArea').removeClass('mn_open');
});





// $(document).ready(function() {
//     var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
//     $(".menu_open, #headerArea .box").click(function(e) { //메뉴버튼 클릭시
//        e.preventDefault(); 
 
//         var documentHeight =  $(document).height(); //전체 페이지의 높이
//         $("#gnb").css('height',documentHeight); //gnb의 높이를 전체 페이지 높이와 동일
 
//        if(op==false){
//          $("#gnb").animate({right:0,opacity:1}, 'fast');
//          op=true;
//          $('#headerArea .box').show();
//        }else{
//          $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
//          op=false;
//          $('#headerArea .box').hide();
//        }
 
//     });
// });