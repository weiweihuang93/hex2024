// $('.hamburger .btn').click(function () {
//     $('.header-sm-nav').toggleClass('open');
//     $('.header-sm-content').toggleClass('open');
//     $('.hamburger .btn').toggleClass('active').toggleClass('close');
//   });

$(document).ready(function(){

    $('.btn').click(function(){

        $('.btn').toggleClass('active');
        $('.hamburger .open').toggleClass('close');
        $('.closure').toggleClass('close');
        $(".header-group-sm").toggleClass("close");

        $(".header-group-sm").toggle();
    })

});