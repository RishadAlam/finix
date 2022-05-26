$(function(){

    //=== fixed Navbar ===//

    let nav = $('#navbar');
    let navTop = nav.offset().top;

    $(window).scroll(function(){
        let scrTop = $(window).scrollTop();
        
        if (scrTop > navTop) {
            nav.addClass('fixed-menu');
        }else{
            nav.removeClass('fixed-menu');
        }

        //=== Back Top Button ===//

        if (500 < scrTop) {
          $(".back-to-top").fadeIn(500);
        }else{
          $(".back-to-top").fadeOut(500);
        }
    });
    $(".back-to-top").click(function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  
    //=== Navbar Search box ===//
    $(".nav-search").click(function(){
      $(".search-ovely").fadeIn(500);
      $(".nav-search").hide();
      $(".nav-search-close").show();
    })
    $(".nav-search-close").click(function(){
      $(".search-ovely").fadeOut(500);
      $(".nav-search-close").hide();
      $(".nav-search").show();
    })

      //=== Brand Partner Owl Carosel int ===//
      $(".owl-carousel").owlCarousel({
            items:5,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                768:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                },
                1200:{
                    items:5,
                    nav:false,
                }
            }
      });


      //=== Services Slick Slider int ===//
      $('.serivices-nav').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        asNavFor: '.services-nav-cnt',
        centerMode: false,
        centerPadding: '0px',
        prevArrow: ".services-nav-prev",
        nextArrow: ".services-nav-next",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows:false
              }
            }
          ]
      });
      $('.services-nav-cnt').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        asNavFor: '.serivices-nav',
      });

      //=== Clients Words Slick Slider int ===//
      $('.clients-words').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true
      });

      $('.serivices-nav').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        asNavFor: '.services-nav-cnt',
        centerMode: false,
        centerPadding: '0px',
        prevArrow: ".services-nav-prev",
        nextArrow: ".services-nav-next",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows:false
              }
            }
          ]
      });

      //=== Project page Slick Slider int ===//
      $('.project-slaider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: "2000",
        arrows:true,
        prevArrow: ".project-prev",
        nextArrow: ".project-next",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows:false
              }
            }
          ]
      });

});