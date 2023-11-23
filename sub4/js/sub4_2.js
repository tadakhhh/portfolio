
var cnt=$('.restore .menu a').size();  //탭메뉴 개수 ***

$('.restore .menu a').each(function (index) {  // index=0 1 2
  $(this).click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

      var ind = $(this).index('.restore .menu a');
      console.log(ind);
      
      $('.restore .black_box').fadeIn('fast');

      $(".restore .popuplist li").hide(); //모든 탭내용을 안보이게...
      $(".restore .popuplist li:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
  
      $('.close,.restore .black_box').click(function(e){
        e.preventDefault();
          $('.restore .black_box').hide();
          $('.restore .popuplist li').hide();
      });
      
    });
    
});
