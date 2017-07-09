$(function () {
    $("img").on("click", function(){
        var $fadeShowImg = $(".fade-show-img");
        var $path = $(this).attr("src");

        $fadeShowImg.html("<img src='"+ $path+"'>");
        $fadeShowImg.find("img").css({maxHeight: $(window).height()-100});

        $(".fade").fadeIn();

        $fadeShowImg.css({height: $fadeShowImg.find("img").height()});

        var $left = $(window).width()/2 - $fadeShowImg.width()/2;
        var $top = $(window).height()/2 - $fadeShowImg.height()/2;

        $fadeShowImg.css({top: $top, left: $left });

    });
    $(".fade").on("click", function(){
        $(this).fadeOut();
    });
    $(window).on("resize", function(){
      /* $(".fade").fadeOut();*/
        var $fadeShowImg = $(".fade-show-img");
        $fadeShowImg.css({height: $fadeShowImg.find("img").height()});

        var $left = $(window).width()/2 - $fadeShowImg.width()/2;
        var $top = $(window).height()/2 - $fadeShowImg.height()/2;

        $fadeShowImg.css({top: $top, left: $left });

    });
});