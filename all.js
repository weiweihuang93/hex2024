$(document).ready(function(){

    $('.navbar-btn').click(function(){

        $('.navbar-btn').toggleClass('active');
        $('.btn').toggleClass('close');
        
        $(".header-group").toggleClass("active");
    })

});