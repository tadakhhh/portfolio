

$(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)

    $(".close_btn, .business6 .pop_menu li").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();

        var ind = $(this).index('.pop_menu li');
        //console.log(ind);
 
        var documentHeight =  $(document).height(); //전체 페이지의 높이
        $(".popup li").css('height',documentHeight); //gnb의 높이를 전체 페이지 높이와 동일
 
       if(op==false){
         $(".popup li:eq("+ind+")").animate({left:0,opacity:1}, 'fast');
         op=true;
       }else{
         $(".popup li").animate({left:'-100%',opacity:0}, 'fast');
         op=false;
       }
 
    });
});
