
function applyStylesAbove640() { //640이상
    $('.character .backg').css({
        "background": "url(./images/Characterback_3.png) center no-repeat",
        "background-size": "fill"
    });
    $('.character .chag').find('img').hide();
    $('.character .chag').find('img:eq(3)').show();
    $('.character_con li:eq(3) a').css({
        "background": "rgba(0, 0, 0, .8)",
        "color": "#fff"
    });
    $('.character_con li:eq(3) a').find('dt').css('border-bottom', '3px solid #a63a3c');
    $('.character_con li a').find('dd:eq(1)').hide();
    $('.character_con li:eq(3) a').find('dd:eq(1)').show();
    $('.character_con li a').find('dl').css('opacity', '.5');
    $('.character_con li:eq(3) a').find('dl').css('opacity', '1');

    $('.character_con li a').hover(function (e) {
        e.preventDefault();
        var ind = $(this).index('.character_con li a');
        // console.log(ind);

        $('.character_con li a').css({
            "background": "none",
            "color": "#333"
        });
        $('.character_con li a').find('dd:eq(1)').hide();
        $('.character_con li a').find('p').css('opacity', '.5');
        $('.character_con li a').find('dl').css('opacity', '.5');
        $('.character .backg').css({
            "background": "url(./images/Characterback_" + ind + ".png) center no-repeat",
            "background-size": "fill"
        }).css({ transition: 'all ease .5s' });
        $('.character .chag').find('img').hide();
        $('.character .chag').find('img:eq(' + ind + ')').show();
        $('.character_con li a').find('dt').css('border-bottom', '3px solid #333').show();
        $('.character_con li a').find('dd:eq(0)').show();
        $(this).css({
            "background": "rgba(0, 0, 0, .8)",
            "color": "#fff"
        }).css({ transition: 'all ease .5s' });
        $(this).find('p').css('opacity', '1');
        $(this).find('dl').css('opacity', '1');
        $(this).find('dd:eq(1)').css({ transition: 'all ease .2s' }).show();
        $(this).find('dt').css('border-bottom', '3px solid #a63a3c');
    });
}

function applyStylesBelow640() { //640이하
    $('.character .backg').css({
        "background": "url(./images/Characterback_3.png) center no-repeat",
        "background-size": "cover"
    });
    $('.character .chag').find('img').hide();
    $('.character .chag').find('img:eq(3)').show();
    $('.character_con li:eq(3) a').css({
        "background": "rgba(0, 0, 0, .8)",
        "color": "#fff"
    });
    $('.character_con li a').find('dd:eq(1)').hide();
    $('.character_con li:eq(3) a').find('dd:eq(1)').hide();
    $('.character_con li:eq(3) a').find('dt').css('border-bottom', '3px solid #a63a3c');
    $('.character_con li a').find('dl').css('opacity', '.5');
    $('.character_con li:eq(3) a').find('dl').css('opacity', '1');

    $('.character_con li a').hover(function (e) {
        e.preventDefault();
        var ind = $(this).index('.character_con li a');
        $('.character_con li a').css({
            "background": "none",
            "color": "#333"
        });
        $('.character_con li a').find('dd:eq(1)').hide();
        $('.character_con li a').find('p').css('opacity', '.5');
        $('.character_con li a').find('dl').css('opacity', '.5');
        $('.character .backg').css({
            "background": "url(./images/Characterback_" + ind + ".png) center no-repeat",
            "background-size": "cover"
        }).css({ transition: 'all ease .5s' });
        $('.character .chag').find('img').hide();
        $('.character .chag').find('img:eq(' + ind + ')').show();
        $('.character_con li a').find('dt').css('border-bottom', '3px solid #333').show();
        $('.character_con li a').find('dd:eq(0)').show();
        $(this).css({
            "background": "rgba(0, 0, 0, .8)",
            "color": "#fff"
        }).css({ transition: 'all ease .5s' });
        $(this).find('p').css('opacity', '1');
        $(this).find('dl').css('opacity', '1');
        $(this).find('dd:eq(1)').css({ transition: 'all ease .2s' }).show();
        $(this).find('dt').hide();
        $(this).find('dd:eq(0)').hide();
    });
}

//창 크기에 따라서 스타일 적용
if (window.innerWidth >= 640) {
    applyStylesAbove640();
} else {
    applyStylesBelow640();
}


$(window).on('resize', function () {
    if (window.innerWidth > 640) {
        applyStylesAbove640();
    } else {
        applyStylesBelow640();
    }
});