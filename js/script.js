$(function () {
    // Fixed Header
    const header = $("#header");
    const intro = $("#intro");
    let introH;
    let scrollPos;

    const checkScroll = function (scrollPos, introH) {
        if (scrollPos + 81 > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    $(window).on("load resize scroll", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    checkScroll(scrollPos, introH);

    // Smooth Scroll
    const slider = $("#slider");
    const introBtn = $("#introBtn");

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let element = $(this);
        let elementId = element.data("scroll");
        let elementOffset = $(elementId).offset().top;

        slider.removeClass("show");

        $("html, body").animate(
            {
                scrollTop: elementOffset - 80,
            },
            700
        );

        $("#slider a").removeClass("active");
        $(this).addClass("active");
    });

    $("[data-active]").on("click", function (event) {
        event.preventDefault();

        let element = $(this);
        let elementId = element.data("active");
        let elementOffset = $(elementId).offset().top;

        introBtn.removeClass("show");

        $("html, body").animate(
            {
                scrollTop: elementOffset - 80,
            },
            700
        );
    });
});
