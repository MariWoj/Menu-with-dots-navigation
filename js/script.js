function changeDot() {
    const scrollValue = $(window).scrollTop();
    const heightSec2 = $('.sec2').offset().top;
    const heightSec3 = $('.sec3').offset().top;
    const heightSec4 = $('.sec4').offset().top;

    if (scrollValue < heightSec2) {
        $('nav li').not('.dot1').removeClass('active');
        $('.dot1').addClass('active');
    } else if (scrollValue < heightSec3) {
        $('nav li').not('.dot2').removeClass('active');
        $('.dot2').addClass('active');
    } else if (scrollValue < heightSec4) {
        $('nav li').not('.dot3').removeClass('active');
        $('.dot3').addClass('active');
    } else {
        $('nav li').not('.dot4').removeClass('active');
        $('.dot4').addClass('active');
    }
}

$(window).on("scroll", changeDot)

$('nav li').on('click', function () {
    const goToSection = '.s' + $(this).attr('id');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top + 1
    })
})