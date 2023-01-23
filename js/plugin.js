$(function () {
    $(window).scroll(function () {
        let navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            if (!navbar.hasClass('scrolled')) {
                navbar.addClass('scrolled');
            }
        } else {
            navbar.removeClass('scrolled');
        }
    })

    //deal with tabs
    $('.tabs .tab-switch li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        $($(this).data('tab')).siblings().hide();
        $($(this).data('tab')).show();
    })
})