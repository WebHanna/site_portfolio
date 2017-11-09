
var a = false;

$('.menu_icon').click(function () {

    if(!a){
        $('.menu_width_767px').css({
            'display':'block'
        });

        a = !a;
    } else {
        $('.menu_width_767px').css({
            'display':'none'
        });

        a = !a;
    }
});

// $('.menu_icon').click(function (e) {
//     e.stopPropagation();
//     $('.menu_width_767px').css({
//         'display':'none'
//     });
// });
//
// function showMenu('menu_width_767px'){
//     var display = document.getElementById('menu_width_767px').style.display;
//
//     if(display === 'none'){
//         document.getElementById('menu_width_767px').style.display='block';
//
//     }else{
//         document.getElementById('menu_width_767px').style.display='none';
//     }
// }
