$(function(){
    // Плагин для стилизации селектов
    $('.select-js').selectize();

    // Модалки

    $('.fancy').fancybox();

    // Главный слайдер

    $('.main-slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000
    });

    // Замена картинок в круге на главной

    if ($('#about-block-1').length) {
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
                    $('.about-block__num').text('O1');
                    $('.about-block__info').removeClass('about-block__info--active');
                    $('#about-block-1').find('.about-block__info').addClass('about-block__info--active');
                }
                
                if ( scroll > aboutBlock2 ) {
                    $('.about-block__img').css('background-image', 'url(' + aboutPicSrc2 + ')');
                    $('.about-block__num').text('O2');
                    $('.about-block__info').removeClass('about-block__info--active');
                    $('#about-block-2').find('.about-block__info').addClass('about-block__info--active');
                }
    
                if ( scroll > aboutBlock3 ) {
                    $('.about-block__img').css('background-image', 'url(' + aboutPicSrc3 + ')');
                    $('.about-block__num').text('O3');
                    $('.about-block__info').removeClass('about-block__info--active');
                    $('#about-block-3').find('.about-block__info').addClass('about-block__info--active');
                }
    
                if ( scroll > aboutBlock4 ) {
                    $('.about-block__img').css('background-image', 'url(' + aboutPicSrc4 + ')');
                    $('.about-block__num').text('O4');
                    $('.about-block__info').removeClass('about-block__info--active');
                    $('#about-block-4').find('.about-block__info').addClass('about-block__info--active');
                }
            }
        });    
    }


    // if ($(window).innerWidth() > 767) {
    //     $('.cols.cols02').mousewheel(function(e, delta) {
    //         this.scrollLeft -= (delta * 40);
    //         e.preventDefault();
    //     });
    // }

    if ($('.services').length) {
        var scrollLeft = 0;
        var serviceBlockWidth = $('#service-1').innerWidth();
        var scrollLength = serviceBlockWidth * 4;
        if ($(window).innerWidth() < 1749) {
            scrollLength = serviceBlockWidth * 5;
        }
        if ($(window).innerWidth() < 1024) {
            scrollLength = serviceBlockWidth * 6;
        }
        $('.services__arrow-right').click(function(evt) {
            evt.preventDefault();
            if (scrollLeft < scrollLength) {
                var scrollDistance = scrollLeft + serviceBlockWidth * 2;
                $('.cols.cols02').animate({
                    scrollLeft: scrollDistance
                }, 1000);
                scrollLeft += serviceBlockWidth * 2;
                enableServicesArrows(scrollLeft, scrollLength);
            }
        });

        $('.services__arrow-left').click(function(evt) {
            evt.preventDefault();
            var scrollDistance = scrollLeft - serviceBlockWidth * 2;
            $('.cols.cols02').animate({
                scrollLeft: scrollDistance
            }, 1000);
            scrollLeft -= serviceBlockWidth * 2;
            enableServicesArrows(scrollLeft, scrollLength);
        });
    }

    function enableServicesArrows(scrollLeft, scrollLength) {
        if (scrollLeft > 0) {
            $('.services__arrow-left').removeClass('services__arrow--disabled');
        } else {
            $('.services__arrow-left').addClass('services__arrow--disabled');
        }
        if (scrollLeft < scrollLength) {
            $('.services__arrow-right').removeClass('services__arrow--disabled');
        } else {
            $('.services__arrow-right').addClass('services__arrow--disabled');
        }
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

    // Скролл на странице новостей

    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        if($('.news-detailed-js').length) {

            var scrollStart = $('.header').innerHeight();

            var scrollBottom = scrollStart + $('.news-detailed__text').innerHeight() - 700;
        
            if(sc > scrollStart) {
                if(sc < scrollBottom) {
                    $('.news-detailed__commercial').css('bottom', `auto`)
                    $('.news-detailed__commercial').css('top', `${sc - scrollStart}px`)
                } else {
                    $('.news-detailed__commercial').css('top', `auto`)
                    $('.news-detailed__commercial').css('bottom', `100px`)
                }
            } else {
                $('.news-detailed__commercial').css('top', `0px`)
                $('.news-detailed__commercial').css('bottom', `auto`)
            }
        }
    });

    // Страница контакты

    if ($('.contacts').length) {
        $('body').on('click', '.contacts__link', function() {
            $('.contacts-modal').addClass('contacts-modal--open');
        });

        $(document).mouseup(function (e){
            var openedContactsModal = $('.contacts-modal');
            var openedShowRoutes = $('.fancybox-inner');
            if (!openedContactsModal.is(e.target) && openedContactsModal.has(e.target).length === 0 &&
            !openedShowRoutes.is(e.target) && openedShowRoutes.has(e.target).length === 0) { 
                $('.contacts-modal').removeClass('contacts-modal--open');
            }
        });

        $('body').on('click', '.contacts-modal__close', function() {
            $('.contacts-modal').removeClass('contacts-modal--open');
        });
    }

    // Слайдер картинок на странице О нас

    if($('.company-slider').length) {
        var marquee = $("#slide_line"); 
        marquee.wrapInner("<span>");
        marquee.find("span").addClass('company-slider__inner');
        marquee.append(marquee.find("span").clone());
        marquee.wrapInner("<div>");
        marquee.find("div").css({"display": "flex"});
        var reset = function() {

                $(this).css("margin-left", "0%");
                $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
          
        };
        reset.call(marquee.find("div"));
    }

    // Ховер на ссылки услуг на странице О нас

    if ($(window).innerWidth() > 1199) {
        $('.company-services__link').hover(function(){
            $('.company-services__img').removeClass('show');
            $(this).closest('.company-services__span').find('.company-services__img').addClass('show');
        });
    }

    // Основной слайдер на странице о нас

    if ($('.company-about__slider').length) {
        var $slider = $('.company-about__slider');
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        
        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).html('<span class="slider__counter-item">' + currentSlide + '</span>' + slidesCount)
            $slider.find('.company-about__slide-counter-num').each(function() {
                $(this).text('O' + currentSlide);
            });
            $slider.find('.company-about__slide-counter-common').each(function() {
                $(this).text('O' + slidesCount);
            });
        };

        $slider.on('init', function(event, slick) {
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
            console.log('dsad');
        });

        $slider.slick({
            fade: true,
            infinite: false
        });
    }

    // Маски для телефонов
    $('input[type="tel"]').mask('+7 (000) 000-00-00');

    // Слайдер Другие проекты

    $('.portfolio-slider').slick({
        slidesToShow: 3,
        arrows: false,
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

    // Горизонтальный скролл на детальных услуг

    if ($(window).innerWidth() > 1199) {
        $('.service__inner').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 40);
            e.preventDefault();
        });
    }
});