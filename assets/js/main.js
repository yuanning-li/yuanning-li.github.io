
/*
Name: main js 
Version:1.0
更多高端模板：http://www.bootstrapmb.com
*/


(function ($) {
    'use strict';

    jQuery(document).ready(function ($) {
        
        var mesonry = $('.mesonry-grid');
        mesonry.masonry({
          itemSelector: '.col-lg-3',
          horizontalOrder: true
        });

        //define all carousels
        if ($.fn.owlCarousel) {
            
            var targets           = $('.targets');
            var client_carousel   = $('.client_carousel');
            var logo_carousel     = $('.logo_carousel');
            var blog_slide        = $('.blog_slide');
            var feedbacks         = $('.feedbacks');
            var showcase_casousel = $('.showcase_casousel');

            targets.owlCarousel({
                loop: true,
                nav: true,
                navText:["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
                dots: false,
                items:3,
                margin:30,
                responsive:{
                    0:{
                        items:1,
                        magin:60
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });

            client_carousel.owlCarousel({
                loop: true,
                nav: false,
                items:1
            });

            blog_slide.owlCarousel({
                loop: true,
                nav: false,
                items:1,
                margin:30,
                dots:false
            });

            feedbacks.owlCarousel({
                loop: true,
                nav: true,
                items:3,
                margin:30,
                dots:false,
                center:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }

            });

            showcase_casousel.owlCarousel({
                loop: true,
                nav: false,
                items:3,
                margin:30,
                dots:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }

            });

            logo_carousel.owlCarousel({
                loop: true,
                nav: false,
                items:6,
                margin:30,
                dots:false,
                responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
        };

        var play__btn = $(".about_video, .play__btn, .v2video_btn");
        play__btn.modalVideo();

        //fixed nav bar active
        function stickyNav() {
            window.onscroll = function () {
                myFunction()
            };
            var header = document.getElementById("myHeader");
            var sticky = header.offsetTop;

            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        }
        stickyNav();

        //counter up 
        var counter = $('.counter');
            counter.each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 8000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

            });
        });
        
        var sidebar__open = $('li.sidebar__open');
        var clase__btn    = $('.clase__btn');
        var sidebar__area = $('.sidebar__area');
        var search__open  = $(".search-open");
        var search__box   = $(".epress-search-box");
        var search__btn   = $(".close-btn");

        sidebar__open.on('click', function(){
            sidebar__area.addClass('active')
        });
        clase__btn.on('click', function(){
            sidebar__area.removeClass('active')
        });

        search__open.on('click', function(){
            search__box.addClass("active")
        })
        search__btn.on('click', function(){
            search__box.removeClass("active")
        })

        //scroll and active class adding
        var stellarnav = $('.stellarnav');
        stellarnav.stellarNav({
            theme: 'light',
            breakpoint: 960,
            position: 'right',
            phoneBtn: '18009997788',
            locationBtn: 'https://www.google.com/maps'
        });


        //current class adding 
        var navbar =  $('.navbar');
        navbar.onePageNav();

    });

    //jquery load function start
    $(window).on("load", function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            var preloader = $('.preloader');
          if(preloader.length){
            preloader.delay(200).fadeOut(500);
          }
        }
        handlePreloader();

    });


}(jQuery))

