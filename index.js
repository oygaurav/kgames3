$(document).ready(function () {
    $(".snaps").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        autoplay: true,       
        autoplaySpeed: 2000,  

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
        prevArrow: false,
        nextArrow: false,
    });
});


