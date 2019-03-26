$(document).ready(function() {
    $('.mobileBtnMenu').click(function(){
        $('.dropdown').slideUp();
        $('#headerNav > ul').slideToggle();
    });

    $('#headerNav > ul > li').click(function(){
      if ($(this).children('.dropdown').is(':visible')) {
        $('.dropdown').slideUp(300);
      }else {
        $('.dropdown').slideUp(300);
        $(this).children('.dropdown').slideDown(300);
      }
    });

    $('.dropdownMenuLeft').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
    })

    $('.searchSubmit').click(function () {
       $('.search').toggle('fast');
    });

    $(window).resize(function(){
        if ($(window).width() <= 768){
            $(".searchFormHeader").appendTo("#header");
        }
    });

    $('.homeTopSlider ul').bxSlider({
      pager: false,
      // nextSelector: '.nextArrow',
      // prevSelector: '.prevArrow',
      // prevText: '',
      // nextText: ''
    });
    $('.actual-slider').bxSlider({
        slideWidth: 325,
        slideMargin: 10,
        moveSlides: 1,
        minSlides: 2,
        maxSlides: 3,
        pager: false
    });


    $('.dropdownMenuLeft > li').hover(function() {
      $(this).parent().find('.dropdownContent').hide();
      $(this).children('.dropdownContent').show();
    });

    $('.dropdownMenuLeft > li').hover(function() {
        $(this).removeClass('first');
    })

    $( "#tabs" ).tabs();

    $('.sidebarMarkets li').click(function () {
        $(this).addClass('current').siblings('.current').removeClass('current');;
    });

    $('.addComment').click(function() {
        $('html, body').animate({
            scrollTop: $("#commentsForm").offset().top
        }, 1000);
    })
});
