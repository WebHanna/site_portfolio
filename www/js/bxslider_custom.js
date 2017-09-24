$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".section_seven").offset().top
    }, 1000);
});