if ($("#body-inner").hasClass("smooth-scrollbar")) {

	// Smooth Scrollbar plugin: https://idiotwu.github.io/smooth-scrollbar/
	var Scrollbar = window.Scrollbar;
	Scrollbar.init(document.querySelector("#scroll-container"), {
		damping: 0.05,
		renderByPixel: true,
		continuousScrolling: true,
		alwaysShowTracks: true
	});

}


// Smooth scroll between elements.
$('.sm-scroll').on("click", function () {

	var target = this.hash;

	// If fixed header position enabled.
	if ($("#nav").hasClass("nav-fixed")) {
		var $offset = $("#nav").height();
	} else {
		var $offset = 0;
	}

	// You can use data attribute (data-offset="100") to set top offset in HTML markup if needed. 
	if ($(this).data("offset") != undefined) $offset = $(this).data("offset");

	if ($("#body-inner").hasClass("smooth-scrollbar")) {
		var topY = $(target).offset().top - $('#scroll-container > .scroll-content').offset().top - $offset;
		var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));

		gsap.to($scrollbar, { duration: 2, scrollTo: { y: topY, autoKill: true }, ease: Expo.easeInOut });

	} else {
		var topY = $(target).offset().top - $('body').offset().top - $offset;
		gsap.to($(window), { duration: 2, scrollTo: { y: topY, autoKill: true }, ease: Expo.easeInOut });
	}
	return false;
});


// Scroll to top.
$(".scroll-to-top").on("click", function () {
	if ($("#body-inner").hasClass("smooth-scrollbar")) {
		var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
		gsap.to($scrollbar, { duration: 2, scrollTo: { y: 0, autoKill: true }, ease: Expo.easeInOut });
	} else {
		gsap.to($(window), { duration: 2, scrollTo: { y: 0, autoKill: true }, ease: Expo.easeInOut });
	}
	return false;
});