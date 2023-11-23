// $('.button').click(function(e){
//     e.preventDefault();

//     clearInterval(timeonoff1);
    
//     if($(this).is('.prev')){  //이전버튼 클릭
//        // 지금 클릭한게 클래스 prev을 가지고 있느냐?
        
//          position-=movesize;  // 368씩 감소
//         $('.newsul').animate({left:position}, 'fast',function(){
//            //이 펑션이 포인트! callback함수 콜백함수 (아직도 콜백이 뭔지 모름ㅎ 전에 찾아봣는데...)
//            if(position<=-ulwidth){ // 하나 분량이네 전체가 아니라! 어쩐쥐시발!
//                position=30; // 콜백함수 없이 쓰면 위에꺼랑 겹쳐서 개판됨. 거의 동시에 계산된다고 함. 콜백함수를 쓰면 애니메이션이 모두 계산된 후 계산이 된다!!
//                $('.newsul').css('left',30);  //0으로 보내
//             }
//         }).clearQueue();  

//     }else if($(this).is('.next')){  //다음버튼 클릭
//        // 지금 클릭한게 클래스 next를 가지고 있느냐?
//           if(position>=0){ //최초 다음버튼 클릭시 좌표 이동. 안해주면 박살남~
//                $('.newsul').css('left',-ulwidth);
//                position=-ulwidth;
//            }

//            position+=movesize; // 150씩 증가
//            $('.newsul').animate({left:position}, 'fast',
//                function(){                     
//                    if(position>=30){
//                        $('.newsul').css('left',-ulwidth);   //-750으로 보내
//                        position=-ulwidth;
//                    }
//                }).clearQueue();

var cnt=0;  // 0 1 2 3  
      var total=3;  //이미지의 총개수 4

      // var h4text =['타이틀1','타이틀2','타이틀3','타이틀4'];
      // var ptext =['내용1','내용2','내용3','내용4'];
      // var imgscr = ['big1.jpg','big2.jpg','big3.jpg','big4.jpg'];

      //객체배열만들기

      var pro = [
          {'imgscr1':'business1.jpg', 'dttext':'주향로' , 'spantext':'횡성 양조장' , 'ddtext':'친환경 제조와 친환경 공정을 도입하여 이산화탄소와 탄소 배출량을 최소화하고, 환경 관리 기준치보다 더 강화된 기업 자체 기준을 지켜가며 자연을 보호하기 위해 노력하고 있습니다.', 'dda':'주향로', 'imgscr2':'business01.png','dda_link':'sub2/sub2_1.html'},
          {'imgscr1':'business2.jpg', 'dttext':'국순당 연구소' , 'spantext':'우리술 복원 사업' , 'ddtext':'사라질 위기에 놓여진 우리술을 연구하고 복원하며, 우리나라의 전통을 계승하고 발전시키는 사회적 책임을 다하고 있습니다. 이러한 복원사업은 잊혀져 가는 우리 문화의 한 부분을 복원해 낸다는 의미도 있습니다.', 'dda':'국순당 연구소', 'imgscr2':'business02.png',
          'dda_link':'sub2/sub2_4.html'},
          {'imgscr1':'business3.jpg', 'dttext':'농업회사법인' , 'spantext':'동반성장',  'ddtext':'기업과 지역간의 계약을 체결하여 기업은 지속가능한 농산물 공급을, 농가는 안정적인 생산환경을 조성합니다. 이러한 동반성장은 농가 소득 증대 및 지역경제를 활성화합니다.',  'dda':'윤리경영','imgscr2':'business03.png','dda_link':'sub4/sub4_3.html'}
      ];
      // pro[0].h4text    pro[0].ptext   pro[0].imgscr  
      // pro[1].h4text    pro[1].ptext   pro[1].imgscr
      // pro[2].h4text    pro[2].ptext   pro[2].imgscr
      // pro[3].h4text    pro[3].ptext   pro[3].imgscr


      $('.business .box').fadeIn('slow');
      $('.business .img').fadeIn('slow'); //첫번째 이미지 보여라

      $('.business span').text(cnt+1+'/'+total); // 1/4
      
      //console.log(total);

      function change(){
        //  $('.business .img img').attr('src', './images/'+pro[cnt].imgscr1);
        //  $('.business .img img').hide().fadeIn('slow');
        $('.business .img img:first-child').attr('src', './images/'+pro[cnt].imgscr1);
        $('.business .img img:first-child').hide().fadeIn('slow');
         $('.business .box dt').text(pro[cnt].dttext);
         $('.business .box dd:eq(0)').text(pro[cnt].spantext);
         $('.business .box dd:eq(1)').text(pro[cnt].ddtext);
         $('.business .box dd a').attr('href','./'+pro[cnt].dda_link);
         $('.business .box dd a').text(pro[cnt].dda);
         $('.business .box').hide().fadeIn('slow');
         $('.business .img img:last-child').attr('src', './images/'+pro[cnt].imgscr2);
         $('.business .img img:last-child').hide().fadeIn('slow');
         $('.business span').text(cnt+1+'/'+total);  // 이미지 카운트를 출력해라
      }

      $('.esgbtnr').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();
         cnt++;  // 0 1 2 3  0 1 2 3  0 1 2 3
         if(cnt==total){
            cnt=0;
         }
         change();
      });

      $('.esgbtnl').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();
         cnt--;  // 3 2 1 0   3 2 1 0   3 2 1 0
         if(cnt==-1){
            cnt=total-1;
         }
         change();
      });


      