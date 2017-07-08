$(function() {
    $(".rslides").responsiveSlides();


    $(".works a").on("mouseenter", function(){
        $(this).find(".works-item-content").fadeIn(300);
        $(this).find("img").addClass("animate");

        $(this).find("h3, p").addClass("animated");

        $(this).find("h3").removeClass("fadeOutUp");
        $(this).find("p").removeClass("fadeOutDown");

        $(this).find("h3").addClass("fadeInDown");
        $(this).find("p").addClass("fadeInUp");
    });
    $(".works a").on("mouseleave", function(){
        $(this).find(".works-item-content").fadeOut(300);
        $(this).find("img").removeClass("animate");

        $(this).find("h3").removeClass("fadeInDown");
        $(this).find("p").removeClass("fadeInUp");

        $(this).find("h3").addClass("fadeOutUp");
        $(this).find("p").addClass("fadeOutDown");
    });

/*    window.onscroll = function() {
        $(".showfade").fadeIn(1000);

    };*/

    $(".header-menu a").on("click", function (event) {
        event.preventDefault();
        var $id  = $(this).attr('href');
        var $top = $($id).offset().top;
        $('body,html').animate({scrollTop: $top-60}, 1500);

    });

    $(".menu-btn").on("click", function(){

        $(".header-menu").slideToggle(500);
    })

});