(function ($) {
    $(".menu-item-1").hover(
        function () {
            $(".bg1").fadeIn(500);
        },
        function () {
            $(".bg1").fadeOut(500);
        }
    );
    $(".menu-item-2").hover(
        function () {
            $(".bg2").fadeIn(500);
        },
        function () {
            $(".bg2").fadeOut(500);
        }
    );
    $(".menu-item-3").hover(
        function () {
            $(".bg3").fadeIn(500);
        },
        function () {
            $(".bg3").fadeOut(500);
        }
    );
    $(".menu-item-4").hover(
        function () {
            $(".bg4").fadeIn(500);
        },
        function () {
            $(".bg4").fadeOut(500);
        }
    );
    $(".menu-item-5").hover(
        function () {
            $(".bg5").fadeIn(500);
        },
        function () {
            $(".bg5").fadeOut(500);
        }
    );
    $(".menu-item-6").hover(
        function () {
            $(".bg6").fadeIn(500);
        },
        function () {
            $(".bg6").fadeOut(500);
        }
    );

    var t1 = new TimelineMax({ paused: true });

    t1.to(".outer-content .title", 1, {
        opacity: 0
    });

    t1.to(
        ".menu",
        1.5,
        {
            width: "46%",
            ease: Expo.easeInOut
        },
        "-=1"
    );

    t1.staggerFrom(
        ".menu ul li",
        1.1,
        {
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
        },
        0.1
    );

    t1.to(
        ".images",
        1.75,
        {
            width: "54%",
            ease: Expo.easeInOut,
            delay: -0.5
        },
        "-=1"
    );

    t1.reverse();

    $(document).on("click", ".toggle-btn", function () {
        t1.reversed(!t1.reversed());
    });

    $(document).on("click", "#menu", function () {
        t1.reversed(!t1.reversed());
    });
})(jQuery);
