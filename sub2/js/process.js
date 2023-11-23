

// var pcnt=0;
//     var ptotal=9;
//     var process = [
//         {'plist':'원료', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'좋은 술은 좋은 원료에서', 'pdd':'백세주는 설갱미, 누룩, 12가지 한약재 등으로 만들어 집니다. 제품입고 시 10가지 이상의 항목 세부품질검사를 통해 유해 물질을 검증합니다.', 'pddd':'조사항목 - 수분, 중금속, 잔류농약, 기타 유해물질, 이물질 관리, 중금속 : Pb, Cd, Cr, As, Hg 등, 잔류농약 : BHC, DDT 등 산도 및 인위적 색도조정여부 검사', 'pimgb':'process1.jpg'},
//         {'plist':'누룩 효모 배양', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'누룩배양, 효모배양', 'pdd':'미생물을 최적 상태로 증식시켜 효소를 키우는 단계, 효모를 배양하여 담금에 투입, 발효과정에서 알코올을 생성하는 단계', 'pddd':'', 'pimgb':'process2.jpg'},
//         {'plist':'원료분쇄', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'', 'pdd':'생쌀발효를 위해 쌀(설갱미)과 생약재 성분 추출을 용이하게 하기 위해 약재를 분쇄하는 단계', 'pddd':'', 'pimgb':'process3.jpg'},
//         {'plist':'담금', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'', 'pdd':'설갱미와 12가지 한약재등 각종 원료를 혼합해 술탱크에 담는 단계', 'pddd':'주종에 따라 2~4단 담금 적용한다 (백세주는 2단 담금)', 'pimgb':'process4.jpg'},
//         {'plist':'발효', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'', 'pdd':'미생물이 자신이 가지고 있는 효소를 이용해 유기물을 분해 시키는 단계', 'pddd':'전분이 알코올로 변화되어 술이 만들어 지는 과정', 'pimgb':'process5.jpg'},
//         {'plist':'압착', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'압착, 저장(숙성)', 'pdd':'발효가 완료된 술(탁한상태)을 짜고 찌꺼기(주박)을 제거해서 맑은 술로 만드는 단계, 압착이 안료된 술(나주)를 저온에서 보관(저장)하는 과정', 'pddd':'저온에서 저장하는 과정 중 술 내부에서 물리적, 화학적 변화 진행. 술 맛이 부드러워지고 (화학적 변화), 침전 안정성 및 청징성 증가 (물리적 변화)', 'pimgb':'process6.jpg'},
//         {'plist':'여과', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'', 'pdd':'정밀여과기를 이용해 한번 더 맑은 상태로 만드는 단계', 'pddd':'압착은 탁한 술의 찌꺼기를 제거하는 과정이고 여과는 한번 걸러진 술의 미세한 물질들까지 모두 제거하는 과정', 'pimgb':'process7.jpg'},
//         {'plist':'병입', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'', 'pdd':'여과가 끝난 술을 제품이 담길 병에 자동설비를 통해 술을 담는 단계', 'pddd':'', 'pimgb':'process8.jpg'},
//         {'plist':'검사 및 출하', 'pimgi1':'business1.jpg', 'pimgi2':'business1.jpg', 'pdt':'', 'pdd':'주입 전(공병) 후(제품) 이물질이나 기타 파손을 검사해 불량품을 제거하는 단계', 'pddd':'EBI(Empty Bottle Inspector) : 자동으로 미세한 병 파손 및 이물질을 검사하는 최신기계 장치', 'pimgb':'process9.jpg'}
//     ];

   //   $('.process .alist').fadeIn('slow');

   //  $('.process div span').text(pcnt+1+'/'+ptotal); // 1/4

   //  function change(){
   //      $('.alist p:eq(0)').text(process[pcnt].plist);
   //      $('.alist a:eq(0)').attr('src', './common/images/'+process[pcnt].pimgi1)
   //      $('.alist a:eq(0)').hide().fadeIn('slow');
   //      $('.alist a:eq(1)').attr('src', './common/images/'+process[pcnt].pimgi2);
   //      $('.alist a:eq(1)').hide().fadeIn('slow');
   //      $('.alist a:eq(2)').attr('src', './common/images/'+process[pcnt].pimgi3);
   //      $('.alist a:eq(2)').hide().fadeIn('');
   //      $('.alist dl dt').text(process[pcnt].pdt);
   //      $('.alist dl dd').text(process[pcnt].pdd);
   //      $('.alist p:eq(1)').text(process[pcnt].pddd);
   //      $('.alist img').attr('src', './common/images/'+process[pcnt].pimgb);
   //      $('.alist img').hide().fadeIn('slow');
   //      $('.process div span').text(pcnt+1+'/'+ptotal);
   //  }
   
   // var cnt=$('.process .alist').size();  //탭메뉴 개수 ***

   // $(document).ready(function () {
   //    $(".process .alist").click(function () {
   //      // 만일 li 요소를 클릭한다면, 그 클릭한 형제요소 간의 인덱스 순서를 구해 반환해준다.
   //      let num = $(".alist").index(this);
   //      console.log(num);
   //    });
   //  });

//    $('.process .alist').click(function(){

//       var cnt = $(".alist").index(this);
//       console.log(cnt);
// });

var count = 0;

$('.process .alist').hide();
$('.process .alist:eq(0)').show();

$('.process .pcnt').click(function(e){
   e.preventDefault();
   $('.process .alist').hide();
  

   if($(this).is('.processbtnr')){ // 오른쪽 버튼 클릭  0~8
      count++; //카운트 1씩증가
      if(count==9){
         count=0;
      }
      $('.process .alist' + (count+1)).fadeIn(1000);  //카운트가 마지막 번호(5)라면 초기화 0
      //if(cnt==imageCount+1)cnt=1;  
      
   }else if($(this).is('.processbtnl')){  //왼쪽 버튼 클릭
      count--;   // 8~0
      if(count==-1){
         count=8;
      }
      $('.process .alist' + (count+1)).fadeIn(1000);
   } 
})

