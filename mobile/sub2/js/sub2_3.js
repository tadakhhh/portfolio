var key, value;


function getParams() {

// 현재 페이지의 url   tab.html?num=1
var url = decodeURIComponent(location.href);
// url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
url = decodeURIComponent(url);  //  'tab.html?num=1'

var params='';
// url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
params = url.substring( url.indexOf('?')+1, url.length );   
// 'abcdefg'.substring(2,4);=> 'cdef'
// params = "num=1" 

key = params.split("=")[0];  //'num'
value = params.split("=")[1];  // '1'

value = Number(value);  //  value=1;

  //alert(key);
  //alert(typeof(key));
}
var tapMove= $('.tabs').offset().top-53;
getParams();  //함수호출

//value=1 , value=2 

if(!value){
    value=1;
}else{
    $("html,body").stop().animate({"scrollTop":tapMove},1000);
    
}


$(document).ready(function(){
  var cnt=$('.business8 .tabs li').size();  //탭메뉴 개수 ***
  $(".business8 .contlist").hide();
  $('.business8 .contlist:eq('+(value-1)+')').show(); // 첫번째 탭 내용만 열어라
  $('.tabs .tab'+value).css('background','#ed8b00').css('color','#fff'); //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        $('.business8').css('height','auto');
        var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".business8 .contlist").hide(); //모든 탭내용을 안보이게...
        $(".business8 .contlist:eq("+ind+")").fadeIn(); //클릭한 해당 탭내용만 보여라
        $('.tab').css('background','#fff').css('color','#666').fadeIn('slow'); //모든 탭메뉴를 비활성화
        $(this).css('background','#ed8b00').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

   });
 

});