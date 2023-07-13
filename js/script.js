$(function () {
    // Fixed Header
    const header = $("#header");
    const intro = $("#intro");
    let introH;
    let scrollPos;

    const checkScroll = function (scrollPos, introH) {
        if (scrollPos > introH) {
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
});
