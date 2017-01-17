jQuery(function ($) {

    $(".header-section, .start-journey").height($(window).height());

    var $redSection = $(".red-section"),
        $drone = $(".drone"),
        redSectionWidth = $redSection.outerWidth(),
        $burger = $(".burger"),
        $burgerClose = $(".burger-close"),
        $sliderItem = $(".carousel-item"),
        $indicator = $(".carousel-indis i"),
        $hiddenMenu = $(".hidden-menu"),
        $showTextBtn = $(".show-text"),
        $pushElements = $("" +
            ".examples-section, " +
            ".header-inner, " +
            ".header-banner, " +
            ".features, " +
            ".generation-vision, " +
            ".generation-flying," +
            ".start-journey," +
            ".footer-text");

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
        $pushElements.addClass("pushed");
        $hiddenMenu.addClass("slipped");
    });

    $burgerClose.on("click", function () {
        $pushElements.removeClass("pushed");
        $hiddenMenu.removeClass("slipped");
    });

    $indicator.on("click", function () {
        var thisIndicator = $indicator.index($(this));

        $sliderItem.hide();
        $sliderItem.eq(thisIndicator).fadeIn(1500);
        $indicator.removeClass("current-indicator");
        $(this).addClass("current-indicator");
    });

    $showTextBtn.on("click", function () {
        $(this).siblings(".generation-vision, .generation-flying, .xl-title").toggleClass("lg-title");
        $(this).siblings(".hidden-text").slideToggle(300);
        var text = $(this).text() == 'view more' ? 'view less' : 'view more';
        $(this).text(text);
    });

});
