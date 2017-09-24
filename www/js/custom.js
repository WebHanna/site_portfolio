$('.menu940').click(function () {
    $('.menu_copy').css({
        'display':'block'
    });
});

$('.close').click(function (e) {
    e.stopPropagation();
    $('.menu_copy').css({
        'display':'none'
    });
});