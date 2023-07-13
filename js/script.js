/* Fixed Header */
["load", "resize", "scroll"].forEach(function (event) {
    const header = document.getElementById("header");

    window.addEventListener(event, function () {
        let scrollPos = window.scrollY;

        if (scrollPos > 0) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
});
