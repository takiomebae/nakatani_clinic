/*jshint strict:false*/
$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        speed: 3000
    });
    $('.Toggle').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.NavMenu').addClass('active'); //クラスを付与
        } else {
            $('.NavMenu').removeClass('active'); //クラスを外す
        }
    });
});