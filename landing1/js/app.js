$(function (){

    var $btn = $("#menu-btn");
    var $nav = $("#header-nav");
    $nav.hide();

    HideShow();

    $btn.on("click", function(){
        $nav.slideToggle(300);
    });

    $(window).resize(function(){
       HideShow();
    });

    function HideShow(){

        if($(window).width() <= 752){
            $btn.removeClass("hidden");
            $nav.hide();
            $btn.show();

        }else {
            $nav.show();
            $btn.hide();
        }
    }

    $("#header-nav a, #to-top a").on("click", function (event) {
        event.preventDefault();
        var $id  = $(this).attr('href');
        var $top = $($id).offset().top;
        $('body,html').animate({scrollTop: $top-60}, 1500);

        if($(window).width() <= 769){
            $nav.slideUp(300);}

    });


});