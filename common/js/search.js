//�앹뾽 �꾩슦湲�
$(document).ready(function(){

    $('#headerArea .searchBtn').click(function(e){
        e.preventDefault();
        // $(".headerSearch").html(data);
        //console.log($('#headerSearch #search'));
        $('#headerSearch').slideDown();

        // 寃��� �リ린
        $('#headerSearch .closeBtn').click(function(e){
            e.preventDefault();
            $('#headerSearch').slideUp();                    
        });
    });

    $('#btn').click(function(){
        var pname = $('#title').val();
        if(pname){ //寃��됱뼱瑜� �낅젰�덉쑝硫�
          location.href = 'http://dmahffk.cafe24.com/sub3/sub3_1.html?pname='+  pname;
        }else{ //寃��됱뼱瑜� �낅젰�섏� �딆븯�ㅻ㈃
          alert('검색된 제품이 없습니다.');
        }
    });
    $('#headerSearch dl dd a').click(function(e){
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
