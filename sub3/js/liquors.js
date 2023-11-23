// // 스크롤 애니메이션
// var c2 = $("#content").offset().top-1000;
// var c3 = $("#content .intro").offset().top-500;

// $(window).on("scroll", function () {
//   var scroll = $(window).scrollTop(); //스크롤 top의 높이

//   if (scroll >= c2) {
//     $("#content .title_area h2").addClass("active");
//     $("#content .title_area p").addClass("active");
//   } else if (scroll < c2) {
//     $("#content .title_area h2").removeClass("active");
//     $("#content .title_area p").removeClass("active");
//   }
//   if (scroll >= c3) {
//     $(".intro .terminal_img").addClass("active");
//     $(".intro .terminal_text").addClass("active");
//   } else if (scroll < c3) {
//     $(".intro .terminal_img").removeClass("active");
//     $(".intro .terminal_text").removeClass("active");
//   }


 
// });

$(function(){
    var key, value;
  
    function getParams() {
   
    // 현재 페이지의 url   ./product.html?pname=베이스
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex2.html?num=1'
 
    var params='';
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
    // '문자열'.substring(시작인덱스 , 자를개수) 
    // 'abcdefg'.substring(2 , 3) ->  'cde'
    // params = 'pname=베이스' 
    
    key = params.split("=")[0];  //'pname'
    value = params.split("=")[1];  // '베이스'
    }   
    getParams();  //함수호출




    //jquery Ajax 문법형식
    /*
    $.ajaxx({
        url: json 파일 경로,
        dataType: 파일 종류,
        success: function(data){ // 파일의 접근이 완료되면 data 매개변수에 json 파일의 객체배열 데이터가 저장됨 
        }

    })
    */

   $.ajax({
       url: './js/liquors.json',
       dataType: 'json',
       success: function(data){
           var useData = data.liquors; //객체배열 저장
           
           function dataPrint(arr){
               
                   var txt = '<ul>';
                   
                   for(var i in arr){ //for(var i=0; i<useData.length; i++)
                       
                        var $Image = arr[i].Image;
                        var $Name = arr[i].Name;
                        var $NameVolume = arr[i].NameVolume;
                        var $Volume1 = arr[i].Volume1;
                        var $Volume2 = arr[i].Volume2;
                        var $Volume3 = arr[i].Volume3;
                        var $NameLevel = arr[i].NameLevel;
                        var $Level1 = arr[i].Level1;
                        var $Level2 = arr[i].Level2;
                        var $NameRaw = arr[i].NameRaw;
                        var $Raw_material = arr[i].Raw_material;
                        var $Logo = arr[i].Logo;

                        txt+='<li>';
                        txt+='<img src="./common/images/'+ $Image +'" alt="">';
                        txt+='<img src="./common/images/'+ $Logo +'" alt="">';
                        txt+='<p>'+$Name+'</p>'; 
                        txt+='<dl>';
                        txt+='<dt>'+$NameVolume+'</dt>';
                        txt+='<dd>'+$Volume1+'ml </dd>';
                        if($Volume2){
                            txt+='<dd>, '+$Volume2+'ml </dd>';
                        }
                        if($Volume3){
                            txt+='<dd>, '+$Volume3+'ml</dd>';
                        }
                        txt+='</dl>';
                        txt+='<dl>';
                        txt+='<dt>'+$NameLevel+'</dt>';
                        txt+='<dd>'+$Level1+'도</dd>';
                        if($Level2){
                            txt+='<dd>, '+$Level2+'도</dd>';
                        }
                        txt+='</dl>';
                        txt+='<dl>';
                        txt+='<dt>'+$NameRaw+'</dt>';
                        txt+='<dd>'+$Raw_material+'</dd>';
                        txt+='</dl>';
                        txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.product_list').html(txt);
              
           };
           

           var newArray = [];
           //초기실행, 함수호출
            
           if(value){
                //다른페이지에서 검색어 입력을 하였을때...
                newArray = useData.filter(function(element){
                    return element.Name.includes(value);
                });
                //console.log(newArray);

                if(newArray.length!=0){
                    dataPrint(newArray);
                }else{
                    $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:#666">검색된 제품이 없습니다</span>');
                }
           }else{ 
                dataPrint(useData); 
           }


           $('#btn2').click(function(){ //검색 버튼 클릭
            var newArray = useData.filter(function(element){
            
            //return element.Name == $('#title').val();
            return element.Name.includes($('#title2').val());
            }); //포함만 되어있으면 
            
            if(newArray.length!=0){
                dataPrint(newArray); //검색된 배열 보이기
            }else{
                $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:#666">검색된 제품이 없습니다.</span>');
            }
   
           });

           $('.btn_all').click(function(){  //모두보기
               dataPrint(useData);
           });
       } 
   });

   $('.product dl dd a').click(function(e){
    e.preventDefault();

    var search_index = $(this).index(); // 0 1 2 3
    var ch='';
    if(search_index==0){
        ch='백세주';
    }else if(search_index==1){
        ch='막걸리';
    }else if(search_index==2){
        ch='복분자';
    }else if(search_index==3){
        ch='소주';
    }
    location.href = 'http://dmahffk.cafe24.com/sub3/sub3_1.html?pname='+  ch;
});
    
});