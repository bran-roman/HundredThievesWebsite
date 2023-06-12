
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));


$(document).ready(function () {
  // Initializing scrollspy

  // Initializing scroll snap
  //$(function () {
  //  $.scrollify({
  //    section: ".landing-page-section",
  //    sectionName: "landing-page-section-scroll",
  //    setHeights: false,
  //    scrollSpeed: 600,
  //    touchScroll: true,
  //    interstitialSection: "#footer-main"
  //  });
	  

  //});

	$('.flex-container').waitForImages(function () {
		$('.spinner').fadeOut();
	}, $.noop, true);

	$(".flex-slide").each(function () {
		$(this).hover(function () {
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function () {
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
	

  

    

});




// custom cursor

var $ = newFunction();

function newFunction() {
    var $ = document.querySelector.bind(document);
    var $on = document.addEventListener.bind(document);
    

    var xmouse, ymouse;
    $on('mousemove', function(e) {
        xmouse = e.clientX || e.pageX;
        ymouse = e.clientY || e.pageY;
    });

    var ball = $('#ball');
    var x = void 0, y = void 0, dx = void 0, dy = void 0, tx = 0, ty = 0, key = -1;

    var followMouse = function followMouse() {
        key = requestAnimationFrame(followMouse);

        if (!x || !y) {
            x = xmouse;
            y = ymouse;
        } else {
            dx = (xmouse - x) * 0.095;
            dy = (ymouse - y) * 0.095;
            if (Math.abs(dx) + Math.abs(dy) < 0.1) {
                x = xmouse;
                y = ymouse;
            } else {
                x += dx;
                y += dy;
            }
        }
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
    };


    // intro-title animation  
    var textWrapper = document.querySelector('.intro-title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false }).add({
        targets: '.intro-title .letter',
        translateY: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 300 + 30 * i;
        }
    }).add({
        targets: '.intro-title .letter',
        translateY: [0, -40],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function(el, i) {
            return 100 + 30 * i;
        }
    });

    // blog landing page main header text
    //var textWrapper = document.querySelector('.blog-landing-page-main-header-text');
    //textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    //anime.timeline({ loop: false }).add({
    //    targets: '.blog-landing-page-main-header-text .letter',
    //    translateY: [40, 0],
    //    translateZ: 0,
    //    opacity: [0, 1],
    //    easing: "easeOutExpo",
    //    duration: 1400,
    //    delay: function (el, i) {
    //        return 300 + 30 * i;
    //    }
    //}).add({
    //    targets: '.blog-landing-page-main-header-text .letter',
    //    translateY: [0, -40],
    //    opacity: [1, 0],
    //    easing: "easeInExpo",
    //    duration: 1200,
    //    delay: function (el, i) {
    //        return 100 + 30 * i;
    //    }
    //});


    // hero-title animation
    var textWrapper = document.querySelector('.hero-title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false }).add({
        targets: '.hero-title .letter', 
        translateX: [40, 0],

        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
            return 8000 + 30 * i;
        }
    });

    

    // reveling other elements
    TweenMax.to(".loading-screen", 2.2, {
        delay: 3.8,
        top: "-100%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".logo", 2, {
        delay: 5.2,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });

    TweenMax.from(".year", 2, {
        delay: 5.3,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut
    });


    TweenMax.from(".bar", 2, {
        delay: 7.2,                       
        width: "0%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".project", 2, {
        delay: 8,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });

    //TweenMax.from("._container", 3, {
    //    delay: 8,
    //    transform: 'translateX(-50vw)',
    //    opacity: 0,
    //    ease: Power1.easeInOut
    //});




    TweenMax.staggerFrom(".media ul li", 2, {
        delay: 6.2,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut
    }, 0.1);
    return $;

    // Split
    //$(".example").split({
    //    theme:
    //        "bottom-to-top-fade-out,bottom-to-top-zoom-in,bottom-to-top-fade-out,fade-in-out,fade-in-out",
    //    delay: "50",
    //    height: "600",
    //    infinite: "true"
    //});

    let burger = document.getElementById("burger"),
        navi = document.getElementById("navi"),
        toggles = false;

    burger.addEventListener("click", function slideIt() {
        if (!toggles) {
            navi.style.marginLeft = "0px";
            burger.style.backgroundColor = "rgb(139, 139, 233)";
            toggles = true;
        } else {
            navi.style.marginLeft = "-80vw";
            burger.style.backgroundColor = "rgb(97, 97, 238)";
            toggles = false;
        }
    });

    


}



//var menu_btn = document.querySelector("#menu-btn");
//var sidebar = document.querySelector("#sidebar");
//var container = document.querySelector(".my-container");
//menu_btn.addEventListener("click", () => {
//    sidebar.classList.toggle("active-nav");
//    container.classList.toggle("active-cont");
//});

function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


//current position
var pos = 0;
//number of slides
var totalSlides = $("#slider-wrap ul li").length;
//get the slide width
var sliderWidth = $("#slider-wrap").width();



