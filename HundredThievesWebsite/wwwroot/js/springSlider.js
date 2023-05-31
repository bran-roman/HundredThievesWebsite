//current position
var springpos = 0;
//number of slides
var springtotalSlides = $('#spring-slider-wrap ul li').length;
//get the slide width
var springsliderWidth = $('#spring-slider-wrap').width();


$(document).ready(function() {


    /*****************
     BUILD THE SLIDER
    *****************/
    //set width to be 'x' times the number of slides
    $('#spring-slider-wrap ul#spring-slider').width(springsliderWidth * springtotalSlides);

    //next slide 	
    $('#spring-next').click(function() {
        springslideRight();
    });

    //previous slide
    $('#spring-previous').click(function() {
        springslideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
    ************************/
    //automatic slider
    var springautoSlider = setInterval(springslideRight, 10000);

    //for each slide 
    $.each($('#spring-slider-wrap ul li'), function() {
        //set its color
        var c = $(this).attr("data-color");
        $(this).css("background", c);

        //create a pagination
        var li = document.createElement('li');
        $('#spring-pagination-wrap ul').append(li);
    });

    //counter
    springCountSlides();

    //pagination
    springPagination();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#spring-slider-wrap').hover(
        function() { $(this).addClass('active'); clearInterval(springautoSlider); },
        function() { $(this).removeClass('active'); springautoSlider = setInterval(springslideRight, 3000); }
    );



}); //DOCUMENT READY

/***********
 SLIDE LEFT
************/
function springslideLeft() {
    springpos--;
    if (springpos == -1) { springpos = springtotalSlides - 1; }
    $('#spring-slider-wrap ul#spring-slider').css('left', -(springsliderWidth * springpos));

    //*> optional
    springCountSlides();
    springPagination();
}
/************
 SLIDE RIGHT
*************/
function springslideRight() {
    springpos++;
    if (springpos == springtotalSlides) { springpos = 0; }
    $('#spring-slider-wrap ul#spring-slider').css('left', -(springsliderWidth * springpos));

    //*> optional 
    springCountSlides();
    springPagination();
}
/************************
 //*> OPTIONAL SETTINGS
************************/
function springCountSlides() {
    $('#spring-counter').html(springpos + 1 + ' / ' + springtotalSlides);
}
function springPagination() {
    $('#spring-pagination-wrap ul li').removeClass('active');
    $('#spring-pagination-wrap ul li:eq(' + springpos + ')').addClass('active');
}
