// JavaScript Document

$(document).ready(function(){
  var cnt=$('.tabs .tab').size();  //탭메뉴 개수 ***
  $('.tabs .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('.tabs .tab1').css('background','#ed8b00').css('color','#fff'); //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        $('.tabs').css('height','auto');
        var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
        $(".tabs .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
        $('.tab').css('background','#f5f5f5').css('color','#ccc'); //모든 탭메뉴를 비활성화
        $(this).css('background','#ed8b00').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화
        

   });
 

});

$(document).ready(function(){
     
  $('.kind_btn').on('click', function(e){
      e.preventDefault();
      
      $('.box').show();
      $('.kind').fadeIn('slow');
  });
 
 $('.close_btn, .box').on('click', function(e){
      e.preventDefault();

      $('.kind').fadeOut('fast');
    //   this.parent(big)
      $('.box').hide();
 });
});



      
const data1 = {
  labels:  ['필수 아노산'],
  datasets: [
    {
    label: '설갱미',
    data: [32.05],
    backgroundColor: [
      'rgba(237,139,0,.8)',
      'rgba(204,204,204,.8)'
    ],
    borderColor: [
      'rgb(237,139,0)',
      'rgb(204,204,204)'
    ],
    borderWidth: 1
  },
  {
    label: '일반미',
    data: [29.78],
    backgroundColor: [
      'rgba(204,204,204.8)',
      'rgba(204,204,204,.8)'
    ],
    borderColor: [
      'rgb(204,204,204)',
      'rgb(204,204,204)'
    ],
    borderWidth: 1
  }
  
]
};

    
const config1 = {
  type: 'bar',
  data: data1,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};


const myChart1 = new Chart(
      document.getElementById('myChart1'),
      config1
);








const data2 = {
  labels:  ['isoleusine'],
  datasets: [
    {
    label: '설갱미',
    data: [4.01],
    backgroundColor: [
      'rgba(237,139,0,.8)',
      'rgba(204,204,204,.8)'
    ],
    borderColor: [
      'rgb(237,139,0)',
      'rgb(237,139,0)'
    ],
    borderWidth: 1
  },
  {
    label: '일반미',
    data: [3.59],
    backgroundColor: [
      'rgba(204,204,204.8)',
      'rgba(204,204,204,.8)'
    ],
    borderColor: [
      'rgb(204,204,204)',
      'rgb(204,204,204)'
    ],
    borderWidth: 1
  }
]
};


      
const config2 = {
  type: 'bar',
  data: data2,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};


const myChart2 = new Chart(
      document.getElementById('myChart2'),
      config2
);


const data3 = {
  labels:  ['leucine'],
  datasets: [
    {
    label: '설갱미',
    data: [8.51],
    backgroundColor: [
      'rgba(237,139,0,.8)',
      'rgba(204,204,204,.8)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)'
    ],
    borderWidth: 1
  },
  {
    label: '일반미',
    data: [7.17],
    backgroundColor: [
      'rgba(204,204,204.8)',
      'rgba(204,204,204,.8)'
    ],
    borderColor: [
      'rgb(204,204,204)',
      'rgb(204,204,204)'
    ],
    borderWidth: 1
  }
]
};


      
const config3 = {
  type: 'bar',
  data: data3,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};


const myChart3 = new Chart(
      document.getElementById('myChart3'),
      config3
);



const data4 = {
  labels: [
    '향의 강도',
    '부드러운 맛',
    '쓴 맛',
    '떫은 맛',
    '느끼한 맛'
  ],
  datasets: [{
    label: '설갱미',
    data: [25, 50, 25, 25, 25],
    fill: true,
    backgroundColor: 'rgba(237,139,0,.5)',
    borderColor: 'rgb(237,139,0)',
    pointBackgroundColor: 'rgb(237,139,0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(237,139,0)'
  }, {
    label: '일반미',
    data: [50, 20, 50, 50, 50],
    fill: true,
    backgroundColor: 'rgba(204,204,204,.5)',
    borderColor: 'rgb(204,204,204)',
    pointBackgroundColor: 'rgb(204,204,204)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(204,204,204)'
  }]
};
            
const config4 = {
  type: 'radar',
  data: data4,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};

const myChart4 = new Chart(
      document.getElementById('myChart4'),
      config4
);

