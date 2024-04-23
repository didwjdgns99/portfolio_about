$(document).ready(function(){
    $('.about_hover').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    });

    $('.about_hover').mouseleave(function(){
        $(this).removeClass('active');
        $(this).siblings().removeClass('active')
    });


    $('.header a').mouseenter(function(){
        $(this).addClass('active')
        // $(this).parent().children().removeClass('active');
    });

    $('.header a').mouseleave(function(){
        $(this).removeClass('active')
        // $(this).parent().children().removeClass('active');
    });

    $('.contact_btn').click(function(){
        $('.contact_txt').addClass('active');
        $('.contact_bg').addClass('active');
    });

    $('.close').click(function(){
        $('.contact_txt').removeClass('active');
        $('.contact_bg').removeClass('active');
    });

});