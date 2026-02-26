$(document).ready(function() {

    var owl = $('.branding_contents');
        owl.owlCarousel({
        margin: 24,
        loop: true,
        items: 5,
        center: true,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    })


    var owl = $('.partner_contents');
        owl.owlCarousel({
        margin: 40,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        loop: true,
        items: 10.5,
        dots: false,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    })


});