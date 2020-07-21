$(document).ready(function () {
    $(".slider").not('.slick-initialized').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }]
    });
});
