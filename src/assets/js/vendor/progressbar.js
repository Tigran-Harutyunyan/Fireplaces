$(document).ready(function() {

//jQuery to shift the progress bar on scroll
$(window).scroll(function() {

    var navbar = $('.navbar');
    if (navbar.length) {
        if (navbar.offset().top > 400) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

}); //Document Ready End.
