/*global  $, console, alert */
$(document).ready(function () {
    'use strict';
    $('.icons').click(function () {
        $('.unlist').slideToggle(500);
    });
    // scrolling nav bar
    $(window).scroll(function () {
        var sc = $(this).scrollTop(),
            scoffset = $('.scrolling').offset().top;
        if (sc  >= 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
        if (sc >= scoffset) {
            //Count To Plugin
            $('.timer').countTo();
            $(window).off('scroll');
        }
        if (sc >= 700) {
            $('.scrollTop').fadeIn();
            $('.scrollTop').click(function () {
                $('body, html').animate({
                    scrollTop : 0
                }, 500);
            });
        } else {
            $('.scrollTop').fadeOut();
        }
    });
    // Prtofolio
    $('.buttons button').click(function () {
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
        var suffell = $(this).attr('id');
        if (suffell === 'all') {
            $('.images > div').fadeIn(200);
        } else {
            $('.images > div').fadeOut(200);
            $('.images ').contents().filter('.' + suffell).fadeIn(200);
        }
    });
    
    //owl carousel open
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600:    {
                items:  3
            },
            1000: {
                items: 5
            }
        }
    });
    //choose panal
    $('.choose-panal ul li').click(function () {
        $(this).css('backgroundColor', '#7cb62f').siblings().css('background', 'none');
        var panal = $(this).data('hazem');
        $('.content > div').hide();
        $('.content').contents().filter('#' + panal).fadeIn(100);
    });
    
    //Magnific popup
    $('.pop').magnificPopup({type: 'iframe'});
    
    //slick slider JQ
    $(".slider").slick({
        nextArrow: false,
        prevArrow: false
    });
    
    //smooth scroll
    $('header .ulunlist .unlist a').click(function () {
        $('body, html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 80
        }, 500);
    });
});