
$('.location .pop_menu a').click(function(e){
  e.preventDefault();
  
  var ind = $(this).index('.location .pop_menu a');  // 0 1 2 3
  console.log(ind);

  $('.location .modal_box').fadeIn('fast');

  if(ind==0){
    $('.popup').children('li:eq(0)').fadeIn('slow');
  }
  else if(ind==1){
    $('.popup').children('li:eq(1)').fadeIn('slow');
  }
  else if(ind==2){
    $('.popup').children('li:eq(2)').fadeIn('slow');
  }
  
  $('.close_btn,.location .modal_box').click(function(e){
      e.preventDefault();
      $('.location .modal_box').hide();
      $('.location .popup li').hide();
  });
});
    