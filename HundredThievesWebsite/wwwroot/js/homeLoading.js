gsap.registerPlugin(ScrollTrigger);

newFunction();

function newFunction() {
    gsap.to(".clipper-left", 2, {
        delay: 2,
        clipPath: "inset(0 100% 0 0)",
        ease: "power4.inOut",
    });
    gsap.to(".clipper-right", 2, {
        delay: 2,
        clipPath: "inset(0 0 0 100%)",
        ease: "power4.inOut",
    });
    gsap.from(".loader-wrapper", 2, {
        scale: 0.9,
        ease: "power1.inOut",
    });
    gsap.from(".loader", 2.5, {
        top: "100%",
        ease: "power3.inOut",
    });
    gsap.to(
        ".loader-wrapper, .pre-loader",
        0.2,
        {
            opacity: 0,
            display: "none",
            ease: "power3.inOut",
            delay: 2.1,
        },
        "-=1"
    );
    gsap.from(".play", 2, {
        delay: 3,
        scale: 0,
        ease: "power4.inOut",
    });
    gsap.from(".sidebar-nav > *, .site-nav > *", 1, {
        opacity: 0,
        delay: 3,
        x: 40,
        ease: "power4.inOut",
        stagger: {
            amount: 0.5,
        },
    });
    gsap.from(".home-tab-heading-container", 1, {
        opacity: 0,
        delay: 3.5,
        x: 40,
        ease: "power4.inOut",
        stagger: {
            amount: 1,
        },
    });
    gsap.from(".preview", .8, {
        opacity: 0,
        delay: 3.8,
        x: 40,
        ease: "power4.inOut",
        stagger: {
            amount: 1,
        },
    });
    gsap.from("#preview-images", 2, {
        transform: 'translateX(-50vw)',
        opacity: 0,
        delay: 2,
        x: 40,
        ease: "power4.inOut",
        stagger: {
            amount: 1,
        },
    });

    gsap.from(".tabs", 1, {
        //transform: 'translateX(-50vw)',
        opacity: 0,
        delay: 3.5,
        x: 40,
        ease: "power4.inOut",
        stagger: {
            amount: 1,
        },
    });

    gsap.from(".product", .2, {
  
        delay: .2,

        ease: "power4.inOut",
        stagger: {
            amount: 1,
        },
    });

    gsap.from(".new-blog-heading-container", 1, {
        opacity: 0,
        delay: 3.1,
        x: -100,
        ease: "power4.inOut",
        stagger: {
            amount: 1,
        },
    });


    gsap.from(".about-subtext-container", .9, {
        opacity: 0,
        delay: 3.3,
        y: 100,
        ease: "power4.inOut",
        stagger: {
            amount: 1,
        },
    });

    gsap.from(".blog-banner-container", .9, {
        opacity: 0,
        delay: 3.6,
        x: 100,
        ease: "power4.inOut",
        stagger: {
            amount: 1,
        },
    });

    

    

    

}
