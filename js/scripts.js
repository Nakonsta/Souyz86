$(function(){
    // Плагин для стилизации селектов
    $('.select-js').selectize();

    // Главный слайдер

    $('.main-slider').slick({
        arrows: false,
        dots: false
    });

    // Замена картинок в круге на главной

    var aboutBlock1 = $('#about-block-1').offset().top;
    var aboutBlock2 = $('#about-block-2').offset().top - 100;
    var aboutBlock3 = $('#about-block-3').offset().top - 100;
    var aboutBlock4 = $('#about-block-4').offset().top - 100;

    var aboutPicSrc1 = $('#about-block-1').attr('data-pic');
    var aboutPicSrc2 = $('#about-block-2').attr('data-pic');
    var aboutPicSrc3 = $('#about-block-3').attr('data-pic');
    var aboutPicSrc4 = $('#about-block-4').attr('data-pic');

    var scrollOffset = 300;

    $(window).scroll(function() { 
        
        if($(window).innerWidth() > 1199) {
    
            var scroll = $(window).scrollTop() + scrollOffset;
            var scrollBottom = parseInt($(window).innerHeight()) + parseInt($('.about-block__slider').innerHeight()) - 200;
            var slideHeight1 = $('#about-block-1').offset().top;

            if (scroll > ($(window).innerHeight() + 450)) {
                if (scroll > (scrollBottom + 50)) {
                    $('.about-block__img-wrapper').addClass('about-block__img-wrapper--bottom');
                    $('.about-block__img-wrapper').removeClass('about-block__img-wrapper--active');
                } else {
                    $('.about-block__img-wrapper').removeClass('about-block__img-wrapper--bottom');
                    $('.about-block__img-wrapper').addClass('about-block__img-wrapper--active');
                }
            } else if (scroll < (scrollBottom + 50)){
                $('.about-block__img-wrapper').removeClass('about-block__img-wrapper--bottom');
                $('.about-block__img-wrapper').removeClass('about-block__img-wrapper--active');
            } else {

            }

            if ( scroll < parseInt($(window).innerHeight() + 300) ) {
                $('.about-block__img').css('background-image', 'url(' + aboutPicSrc1 + ')');
                $('.about-block__num').text('01');
                $('.about-block__info').removeClass('about-block__info--active');
                $('#about-block-1').find('.about-block__info').addClass('about-block__info--active');
            }
            
            if ( scroll > aboutBlock2 ) {
                $('.about-block__img').css('background-image', 'url(' + aboutPicSrc2 + ')');
                $('.about-block__num').text('02');
                $('.about-block__info').removeClass('about-block__info--active');
                $('#about-block-2').find('.about-block__info').addClass('about-block__info--active');
            }

            if ( scroll > aboutBlock3 ) {
                $('.about-block__img').css('background-image', 'url(' + aboutPicSrc3 + ')');
                $('.about-block__num').text('03');
                $('.about-block__info').removeClass('about-block__info--active');
                $('#about-block-3').find('.about-block__info').addClass('about-block__info--active');
            }

            if ( scroll > aboutBlock4 ) {
                $('.about-block__img').css('background-image', 'url(' + aboutPicSrc4 + ')');
                $('.about-block__num').text('04');
                $('.about-block__info').removeClass('about-block__info--active');
                $('#about-block-4').find('.about-block__info').addClass('about-block__info--active');
            }
        }
    });

    if ($(window).innerWidth() > 767) {
        $('.cols.cols02').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 40);
            e.preventDefault();
        });
    }

    // Слайдер статей на главной

    $('.articles__slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });

});