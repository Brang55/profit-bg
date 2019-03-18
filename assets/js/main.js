$(document).ready(function() {
    $('.mobileBtnMenu').click(function(){
       $('#headerNav > ul').toggle('slow');
    });

    $('#headerNav > ul > li').click(function(){
        $('.dropdown').toggle('slow');
    });
});