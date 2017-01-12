jQuery(function ($) {

    $(".header-banner").height($(window).height());

    var $redSection = $(".red-section");
    var $drone = $(".drone");
    var redSectionWidth = $redSection.outerWidth();
    var $burger = $(".burger");
    var $burgerClose = $(".burger-close");
    var $sliderItem = $(".carousel-item");
    var $indicator = $(".carousel-indis i");

    $drone.css({
        right: redSectionWidth - $drone.width() / 2
    });

    $(window).resize(function () {
        redSectionWidth = $redSection.outerWidth();
        $drone.css({
            right: redSectionWidth - $drone.width() / 2
        });
    });

    $burger.on("click", function () {
        $(".header-inner").addClass("pushed");
        $(".header-banner").addClass("pushed");
        $(".hidden-menu").addClass("slipped");
    });

    $burgerClose.on("click", function () {
        $(".header-inner").removeClass("pushed");
        $(".header-banner").removeClass("pushed");
        $(".hidden-menu").removeClass("slipped");
    });

    $indicator.on("click", function () {
        var thisIndicator = $indicator.index($(this));

        $sliderItem.hide();
        $sliderItem.eq(thisIndicator).fadeIn(1500);
        $indicator.removeClass("current-indicator");
        $(this).addClass("current-indicator");
    });

});