$(document).ready(function () {
    //smooth scrolling
    // $('nav a[href*="#"]').on('click',function(){
    //     $('html,body').animate(keyframes:{
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, options: 2000);
    // }

    //when click button -- goes to top
    // $('#up').on('click', function(){
    //     $('html,body').animate(keyframes:{
    //         scrollTop: 0
    //     },options: 2000);
    // })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true  //animatino only happens once
    });

});