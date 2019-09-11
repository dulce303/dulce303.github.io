$(document).ready(function() {
    $('.menu_toggle_main').on('click', function(e) {
        e.preventDefault();
        $('body, .mob_menu').addClass('menu_active');
    });
    $('.menu_toggle').on('click', function(e) {
        e.preventDefault();
        $('body, .mob_menu').removeClass('menu_active');
    });
    $('.trigger_icons').on('click', function(e) {
        e.preventDefault();
        $('.ar_icons').toggleClass('d-none');
    });
    $('.link_sec').on('click', function(e) {
        e.preventDefault();
        $('.ar_innerview').addClass('d-none');
        var link_item = $(this).attr('href');
        $(link_item).removeClass('d-none');
        $('.swipe_slider').get(0).slick.setPosition()
    });
    $('.close_page').on('click', function(e) {
        e.preventDefault();
        $('.ar_innerview').addClass('d-none');
        $('#sec_1').removeClass('d-none');
    });
    $('.swipe_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay : false,
        pauseOnHover : false,
        slidesToScroll : 1,
    });
    $('.swipe_slider').on('reInit', function() {
        console.log('reinitialized slider');
    })
    $('.mob_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay : false,
        pauseOnHover : false,
        slidesToScroll : 1
    });
    $('.comm_carousel').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        autoplay : false,
        pauseOnHover : false,
        slidesToScroll : 1,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
            }
        }
        ]
    });
    $('.modal').on('shown.bs.modal', function (e) {
        $('.slick-slider').resize();
    });
});