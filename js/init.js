$('.counter').counterUp({
    time: 1000
});

$('.profile-pic-column').animateCss('bounceInDown', function () {
    $('.hero-text').css('display', 'inline-block');
    $('.hero-text').animateCss('flipInX');
});

$('.client-box').hover(
    function () { $(this).addClass('animated pulse infinite') },
    function () { $(this).removeClass('animated pulse infinite') }
)

$(window).scroll(function () {
    var hT = $('.previous-work-section h1').offset().top,
        hH = $('.previous-work-section h1').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH) && !$('.previous-work-section h1').hasClass('animated')) {
        $('.previous-work-section h1').css('opacity', '1');
        $('.previous-work-section h1').addClass('animated bounceInLeft');
    }
});

$(window).scroll(function () {
    var hT = $('.testimonial-section h1').offset().top,
        hH = $('.testimonial-section h1').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH) && !$('.testimonial-section h1').hasClass('animated')) {
        $('.testimonial-section h1').css('opacity', '1');
        $('.testimonial-section h1').addClass('animated bounceInLeft');
    }
});

$(window).scroll(function () {
    var hT = $('.stats h1').offset().top,
        hH = $('.stats h1').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH) && !$('.stats h1').hasClass('animated')) {
        $('.stats h1').css('opacity', '1');
        $('.stats h1').addClass('animated bounceInLeft');
    }
});