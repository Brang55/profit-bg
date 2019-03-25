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
        slideWidth: 330,
        slideMargin: 10,
        moveSlides: 1,
        minSlides: 2,
        maxSlides: 3
    });


    $('.dropdownMenuLeft li').hover(function() {
        $(this).children('.dropdownContent').slideToggle();
    });

    $( "#tabs" ).tabs();

    $('.sidebarMarkets li').click(function () {
        $(this).addClass('current').siblings('.current').removeClass('current');;
    });
});