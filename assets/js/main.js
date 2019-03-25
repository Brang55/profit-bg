$(document).ready(function() {
    $('.mobileBtnMenu').click(function(){
        $('.dropdown').slideUp();
        $('#headerNav > ul').slideToggle();
    });

    $('#headerNav > ul > li').click(function(){
        // $('.dropdown').slideUp();
        $(this).children('.dropdown').slideToggle();
    });

    $('.searchSubmit').click(function () {
       $('.search').toggle('fast');
    });

    $(window).resize(function(){
        if ($(window).width() <= 768){
            $(".searchFormHeader").appendTo("#header");
        }
    });

    $('.homeTopSlider ul').bxSlider();
    $('.actual-slider').bxSlider({
        moveSlides: 1,
    });

    $('.dropdownMenuLeft li').hover(function() {
        $(this).children('.dropdownContent').slideToggle();
    });
});