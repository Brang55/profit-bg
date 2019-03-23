$(document).ready(function() {
    $('.mobileBtnMenu').click(function(){
       $('#headerNav > ul').toggle('slow');
    });

    $('#headerNav > ul > li').click(function(){
       var dropDown = document.getElementsByClassName('.dropdown');
       for (var i = dropDown.length;  i < 1;  i++) {
           if (i === 0) {
               dropDown[i].toggle('slow');
           }
       }

    });
});