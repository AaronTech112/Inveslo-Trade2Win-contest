$( document ).ready(function() {
var str_faupdate = location.pathname.split("/");
    if(str_faupdate['1'] == "blog"){
   $('.language_view').addClass("mt-3");
        $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
             $('.language_view').removeClass("mt-3");
        } else {
             $('.language_view').addClass("mt-3");
        }
    });
    }
});


/* Loading Function */
//$(window).on('load', function(){
$( document ).ready(function() {
    setTimeout(function(){
              $('.preloader').hide();
               $('#pageTop').fadeIn();
         }, 100);
  });
  function show(){
   $('.preloader').hide();
    $('#pageTop').fadeIn();
  };

 //Mobile Menu Article
     $('.learn_aboutforex_menu').click(function(){
    $('.article_nav_wrapper').slideToggle("slow");
  });
  //Mobile Menu Article

//Hide FA Lang Selection From Header Blog
 $(document).ready(function(){
 var lng_blg = location.pathname.split("/");
 if(lng_blg['1'] == "blog"){
     $(".language_view .nav_dropdown ul li:last-child").attr('style', 'display: none');
 }
});
// Tempblog style
 $(document).ready(function(){
var lng_blg2 = location.pathname.split("/");
 if(lng_blg2['1'] == "blog"){
     $("body").attr('style', 'margin-top: -1.4rem');
 }
});
  
  $(document).ready(function(){
      $('a[href="' + window.location.href + '"]').parents('li,ul').addClass('active');
      $('a[href="' + window.location.href + '"]').addClass('active');
  
      //Toggle Menu Header
    //   $('.header_menu_burger').click(function(){
    //       $('html').toggleClass('has_nav_open');
    //       $('body').toggleClass('overflow_hidden');
    //       $('.web_toggle_menu').toggleClass('show');
    //   });
  
    $(".totop").hide();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10){
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
    $(".totop a").click(function(e){
        $("html, body").animate({scrollTop: 0}, 100);
        return false;
    });
  });
  /* Scroll to Top */
  
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 20) {
          $('header').addClass("fixed-top");
      } else {
          $('header').removeClass("fixed-top");
      }
  });
  
  $(document).ready(function(){
      setTimeout(function(){
          $('body').css('min-height', $(window).outerHeight());
          $('.signin_signup_sec').css('min-height', $(window).outerHeight());
      }, 50);
      
      $(window).resize(function(){
          $('body').css('min-height', $(window).outerHeight());
          $('.signin_signup_sec').css('min-height', $(window).outerHeight());
      });
  
      //Input Label effect
      $(".input_effects .input_effect").val("");        
          $(".input_effects .input_effect").focusout(function(){
              if($(this).val() != ""){
                  $(this).addClass("has-content");
              }else{
                  $(this).removeClass("has-content");
              }
          })
  });
  
  if ($(window).width() < 1200){
    $(document).ready(function(){
      setTimeout(function(){
          $('.home_banner_sec').css('min-height', $(window).outerHeight());
      }, 50);
      
      $(window).resize(function(){
          $('.home_banner_sec').css('min-height', $(window).outerHeight());
      });
       
    });
  } else{
    $(document).ready(function(){
      setTimeout(function(){
          $('.home_banner_sec').css('height', $(window).outerHeight());
      }, 50);
      
      $(window).resize(function(){
          $('.home_banner_sec').css('height', $(window).outerHeight());
      });
       
    });
  }
  
  if ($(window).width() < 768){
    $(document).ready(function(){
      setTimeout(function(){
          $('.home_banner_sec').css('min-height', 'auto');
      }, 50);
      
      $(window).resize(function(){
        $('.home_banner_sec').css('min-height', 'auto');
      });
       
    });
  }
  
  // Why Inveslo Slider
  var $gallery = $('.why_inveslo_slider');
  var slideCount = null;
  $(document).ready(function(){
      $gallery.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 250,
        fade: true,
        cssEase: 'linear',
        swipe: false,
        swipeToSlide: false,
        touchThreshold: 10,
        draggable: true,
        lazyLoad: 'ondemand',
      });
  });
  $gallery.on('init', function(event, slick){
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });
  $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setCurrentSlideNumber(nextSlide);
  });
  function setSlideCount() {
    var $el = $('.slide_count_wrap').find('.total');
    $el.text(slideCount);
  }
  function setCurrentSlideNumber(currentSlide) {
    var $el = $('.slide_count_wrap').find('.current');
    $el.text(currentSlide + 1);
  }
  // Why Inveslo Slider
  
  // Counter
  function counter(){  
    $('.count-number').countTo({
      refreshInterval: 2
    });   
  };
  // Counter
  
  //Advance Trading Slider
  $('.advance_trading_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay:true,
    autoplaySpeed:3500,
    asNavFor: '.advance_trading_thumbnails',
    draggable: false,
    lazyLoad: 'ondemand',
  });
  $('.advance_trading_thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.advance_trading_slider',
    dots: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    draggable: false,
    lazyLoad: 'ondemand',
  });
  // Remove active class from all thumbnail slides
  $('.advance_trading_thumbnails .slick-slide').removeClass('slick-active');
  // Set active class to first thumbnail slides
  $('.advance_trading_thumbnails .slick-slide').eq(0).addClass('slick-active');
  // On before slide change match active thumbnail to current slide
  $('.advance_trading_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.advance_trading_thumbnails .slick-slide').removeClass('slick-active');
    $('.advance_trading_thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });
  //Advance Trading Slider
  
  //Advance Trading Slider
  $('.advance_trading_slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay:true,
    autoplaySpeed:3500,
    asNavFor: '.advance_trading_thumbnails2',
    draggable: false
  });
  $('.advance_trading_thumbnails2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.advance_trading_slider2',
    dots: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    draggable: false
  });
  // Remove active class from all thumbnail slides
  $('.advance_trading_thumbnails2 .slick-slide').removeClass('slick-active');
  // Set active class to first thumbnail slides
  $('.advance_trading_thumbnails2 .slick-slide').eq(0).addClass('slick-active');
  // On before slide change match active thumbnail to current slide
  $('.advance_trading_slider2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.advance_trading_thumbnails2 .slick-slide').removeClass('slick-active');
    $('.advance_trading_thumbnails2 .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });
  //Advance Trading Slider
  
  //Live Video Slider
  $('.live_video_slider_list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: false,
    autoplay:true,
    autoplaySpeed:3500,
    vertical: true,
    verticalSwiping: true,
    nextArrow: '<span class="next"><i class="bi bi-arrow-right"></i></span>',
    prevArrow: '<span class="prev"><i class="bi bi-arrow-left"></i></span>',
    draggable: false
  });
  //Live Video Slider
  //Popup in video close
  $('.modal').on('hidden.bs.modal', function(){
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });
  //Popup in video close
  
  // Footer mobile menu 
  if ($(window).width() < 576){
    $('.footer_menu_mview_heading').click(function(){
      if(!$(this).next().hasClass('show')){
        $('.footer_menu_links').removeClass('show');
        $('.footer_menu_mview_heading').removeClass('arrow_rotate');
      }
      $(this).toggleClass('arrow_rotate');
      $(this).next().toggleClass('show');
    });
  }
  
  $('#product_faq a').click(function(){
    $('.card').removeClass('show');
    $(this).parent('.card').toggleClass('show');
  });
  
  //Our Team Slider
  $('.our_team_sliders').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: false,
    autoplay:true,
    autoplaySpeed:4500,
    vertical: false,
    verticalSwiping: false,
    nextArrow: '<span class="next"><i class="bi bi-chevron-compact-right"></i></span>',
    prevArrow: '<span class="prev"><i class="bi bi-chevron-compact-left"></i></span>',
    draggable: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  //Our Team Slider
  
  //Step Slider
  $('.open_account_step_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: false,
    autoplay:true,
    autoplaySpeed:5000,
    vertical: false,
    verticalSwiping: false,
    draggable: false,
    lazyLoad: 'ondemand',
  });
  //Step Slider
  
  //Type password show
  $('.password_icon').click(function(){        
    var element = $(this).parent('.right_icon_view').children('.password');
    var type = element.attr('type');  
    if('password' == type){
        $(element).prop('type', 'text');
        $(this).addClass('eye_visible');
    }else{
        $(element).prop('type', 'password');
        $(this).removeClass('eye_visible');
    }
  });
  //Type password show
  
 


//   Sticky parent
  if($(window).width() >= 992){
    // $(".contract_specifications_nav_block").stick_in_parent();
    $(window).scroll(function(){
      $('.contract_specifications_sec').removeClass('sticky_top');
      $('.is_stuck').parent('.contract_specifications_sec').addClass('sticky_top');
    });
  }
  
  //Accounts Comparison Tab view
  $('.accounts_comparison_tab_link').click(function(){
    $('.account_type_list li').removeClass('selected');
    $(this).parent('.account_type_list li').addClass('selected');
  });
  
  $(document).ready(function(){
    $('.toggle_menu_list').css('height', $(window).outerHeight(true) - ($('.web_toggle_menu .navbar').outerHeight(true) + $('.toggle_menu_chat').outerHeight(true)));
  });
  $(window).resize(function(){
    $('.toggle_menu_list').css('height', $(window).outerHeight(true) - ($('.web_toggle_menu .navbar').outerHeight(true) + $('.toggle_menu_chat').outerHeight(true)));
  });
  
  
  if($(window).width() < 1200){
    $('.side_menu_bar').click(function(){
      $(this).toggleClass('toggle_close');
      $('.navigation').toggleClass('mobile_toggle_header');
      $('.web_toggle_menu').toggleClass('show');
    });
  
    $(document).ready(function(){
      $('.toggle_menu_list').css('height','auto');
    });
  }
  
  //Market Value Slider
  $('.market_value_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: false,
    autoplay:true,
    autoplaySpeed:4500,
    vertical: false,
    verticalSwiping: false,
    nextArrow: '<span class="next"><i class="bi bi-arrow-right"></i></span>',
    prevArrow: '<span class="prev"><i class="bi bi-arrow-left"></i></span>',
    draggable: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  //Market Value Slider
  
  //Latest Updates Article Slider
  $('.latest_updates_article_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: false,
    autoplay:true,
    autoplaySpeed:4500,
    vertical: false,
    verticalSwiping: false,
    nextArrow: '<span class="next"><i class="bi bi-arrow-right"></i></span>',
    prevArrow: '<span class="prev"><i class="bi bi-arrow-left"></i></span>',
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  //Latest Updates Article Slider
  
  //Invest Stock Slider
  $('.invest_stock_list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: false,
    autoplay:true,
    autoplaySpeed:4500,
    vertical: false,
    verticalSwiping: false,
    draggable: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  //Invest Stock Slider  
  // Learn forex menu mobile toggle
  $('.learn_forex_menu').click(function(){
    $('.intro_forex_link_list').toggleClass('show');
  });
  
  // Contract-Specification
  $(document).ready(function(){
    $('.mobile_tab_link').click(function(){
        if(!$(this).next().hasClass('active')){
            $('.mobile_tab_link').removeClass('selected');
            $('.tab-pane').removeClass('active');
        }
        $(this).toggleClass('selected');
        $(this).next().toggleClass('active');
    });
  });
  
  // Lazyloading function
  $(window).scroll(function(){
    $.each($('img'), function(){
        if($(this).attr('data-src') && $(this).offset().top < ($(window).scrollTop() + $(window).height() + 100)){
           var source = $(this).data('src');
           $(this).attr('src', source);
           $(this).removeAttr('data-src');
        }
   })
  })
  // Form error
  $('#myformsub .btn').on('click', function(){
    if ($('#password').val()){
        $('#password-error').addClass('d-none').hide();
    }else{}
  });
  
  
  // Analysis Breadcrumb
  $('.technical_analysis_block .breadcrumb_sec').css('top',-$('.technical_analysis_block .breadcrumb_sec').outerHeight() - 10);
  // Analysis Breadcrumb
  //Analysis Video Article
  $('.analysis_video_article_slider, .pastwebinar_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: false,
    autoplay:true,
    autoplaySpeed:4500,
    vertical: false,
    verticalSwiping: false,
    nextArrow: '<span class="next"><i class="bi bi-chevron-right"></i></span>',
    prevArrow: '<span class="prev"><i class="bi bi-chevron-left"></i></span>',
    draggable: false,
    responsive:[
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings:{
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 1,
        }
      }
    ]
  });
//Analysis Video Article
//Load More Article
$(document).ready(function(){
    $(".analysis_video_article_slider_list").slice(0, 9).show();
    $(".analysis_article_readmore").on("click", function(e){
      e.preventDefault();
      $(".analysis_video_article_slider_list:hidden").slice(0, 9).fadeIn("slow");
      if($(".analysis_video_article_slider_list:hidden").length == 0){
        $(".analysis_article_readmore").fadeOut("slow");
      }
    }); 
    //$('.analysis_article_readmore').click(function(){
        //$('.analysis_modal_view').css('visibility', 'hidden');
    //});   
});
//Load More Article
//Form autocomplete off
$('form *').prop('autocomplete', 'off');

//Load More Article New Page 
$(document).ready(function(){
    $(".analysis_article_block.investor-section .analysis_video_article_slider_list").slice(0, 9).show();
    $(".analysis_article_readmore_btn").on("click", function(e){
      e.preventDefault();
      $(".analysis_article_block.investor-section .analysis_video_article_slider_list:hidden").slice(0, 9).fadeIn("slow");
      if($(".analysis_article_block.investor-section .analysis_video_article_slider_list:hidden").length == 0){
        $(".analysis_article_readmore_btn").fadeOut("slow");
      }
    });
});
//Load More Article New Page


//  LazyLoad Start
// window.addEventListener("scroll", function() { onScrollDiv() });
// window.addEventListener("DOMContentLoaded", function() { onScrollDiv() });
// function onScrollDiv(){
//     var images = document.querySelectorAll('.lazyload');
//     for (var i=0, nb=images.length ; i <nb ; i++) {
//         var img = images[i]
//         var rect = img.getBoundingClientRect();
//         var isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50 ) ? true : false ;

//         if (isVisible) {
//             if (!img.src) {
//                 img.src = img.dataset.src;
//             }
//         }
//     }
// }
//  LazyLoad End


 // footer award slider
 $('.slider-nav-footer').slick({
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,
    cssEase: 'linear',
    focusOnSelect: false,
   prevArrow: '<button class="slick-next slick-arrow"><i class="bi bi-arrow-left"></i></button>',
   nextArrow: '<button class="slick-prev slick-arrow"><i class="bi bi-arrow-right"></i></button>',
    responsive: [ 
         {
         breakpoint: 991,
         settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '0',
             slidesToShow: 3,
             dots: true,
             centerMode: true,
             draggable: true,
             swipe: true,
             autoplay: true
         }
         },
{
         breakpoint: 767,
         settings: {
             arrows: false,
             dots: true,
             slidesToShow: 2,
        }
          },
         {
         breakpoint: 480,
         settings: {
             arrows: false,
             dots: true,
             centerMode: true,
             draggable: true,
             swipe: true,
             autoplay: true,
             verticalSwiping: false,
             centerPadding: '0px',
             slidesToShow: 1
         }
         }
     ]
  });

  $(".tab_menu_mobile_link").click(function(){
    $(".inews_menus").toggleClass("shownmenus");
    $(".tab_menu_mobile_link").toggleClass("shownmenus");
    $(this).find('i').toggleClass('bi-chevron-double-right').toggleClass('bi-chevron-double-left');
  });

  // for landing page otp verify autocomplete off
  $(document).ready(function(){
      $('#verification_code').on('blur input', function(e) {
        e.preventDefault();
        return false;
    });

    $('#PinForm').submit(function(e) {
         e.stopPropagation();
         e.preventDefault();
    });
  });


// $('.autoplayaward').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   arrows: false,
//   dots: false,
//   vertical: true,
//   fade: true,
// });


$('.autoplayaward').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows: false,
    dots: false,
    centerMode: false,
    pauseOnHover:false,
    speed:1200,
});

$('.autoplayawardlp').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  arrows: false,
  dots: false,
  centerMode: false,
  pauseOnHover:false,
  speed:1200,
});


// Cashback Reward 

// var cginslider = document.getElementById('cginslider');
//     var cginselector = document.getElementById('cginselector');
//     var cginSelectValue = document.getElementById('cginSelectValue');
//     var cginProgressBar = document.getElementById('cginProgressBar');

//     window.onload = function() {  
//         cginSelectValue.innerHTML = this.value('2');  
//     }
//     cginslider.oninput = function(){
//         cginselector.style.left = this.value + "%";
//         cginSelectValue.innerHTML = this.value;
//         cginProgressBar.style.width = this.value + "%";
//     }

$('.card-main-wrapper').mouseover(function(e) {
        $('.card-main-wrapper').mousemove(function(e) {
            var cox = (e.pageX - $(this).offset().left - $(this).width()/2)/20;
            var coy = ($(this).height()/2 - (e.pageY - $(this).offset().top))/20;
            $(this).find('.cardcgin').css('transform','rotateY('+cox+'deg) rotateX('+coy+'deg)');
            $(this).find('.inner').css('transform','translateX('+cox+'px) translateY('+(-coy)+'px)');
        });
    });
    $('.card-main-wrapper').mouseleave(function(e) {
            $(this).find('.cardcgin').css('transform','rotateY(0) rotateX(0)');
            $(this).find('.inner').css('transform','translateX(0) translateY(0)');
    });

$('.cginautoplay').slick({
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
        dots: true,
        arrows: false,
responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToShow: 1,
  centerMode: true,
  variableWidth: true
      }
    }
]
});

$('.protradeautoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
        dots: true,
        arrows: false,
responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToShow: 1,
  centerMode: true,
  variableWidth: true
      }
    }
]
});



// <!-- Range 1 -->

    // var CGin_Slider = document.querySelector('.cgin_range_slider');
    // var CGin_Sliderval = document.querySelector('#CGin_Sliderval');
    // var value1 = (CGin_Slider.value-CGin_Slider.min)/(CGin_Slider.max-CGin_Slider.min)*100;
    // CGin_Slider.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 '+ value1 +'%,  #575976 '+ value1 +'%,  #575976 100%)';

    // var values2 = ['VIP','SILVER','GOLD'];
    // var CGin_Sliderval = document.getElementById('CGin_Sliderval');
    // CGin_Sliderval.innerHTML = values2[this.value];   

    // CGin_Slider.oninput = function(){
    //     var value1 = (this.value-this.min)/(this.max-this.min)*100;
    //     this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value1 +'%,  #575976 '+ value1 +'%,  #575976 100%)'
    //     CGin_Sliderval.innerHTML = CGin_Slider.value;

    //     CGin_Sliderval.innerHTML = values2[this.value];       
    // }


// <!-- Range 2 -->

    // var CGin_Slider2 = document.querySelector('#CGin_Slider2');
    // var CGin_Sliderval2 = document.querySelector('#CGin_Sliderval2');
    // var value = (CGin_Slider2.value-CGin_Slider2.min)/(CGin_Slider2.max-CGin_Slider2.min)*100;
    // CGin_Slider2.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 '+ value +'%,  #575976 '+ value +'%,  #575976 100%)'
   

    // CGin_Slider2.oninput = function(){
    //     var value = (this.value-this.min)/(this.max-this.min)*100;
    //     this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value +'%,  #575976 '+ value +'%,  #575976 100%)'
    //     CGin_Sliderval2.innerHTML = CGin_Slider2.value;
    // }


// <!-- Range 3 --> 

    // var CGin_Slider3 = document.querySelector('#CGin_Slider3');
    // var CGin_Sliderval3 = document.querySelector('#CGin_Sliderval3');
    // var value = (CGin_Slider3.value - CGin_Slider3.min) / (CGin_Slider3.max - CGin_Slider3.min) * 100;
    // CGin_Slider3.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 ' + value + '%,  #575976 ' + value + '%,  #575976 100%)'

    // var cginselector = document.getElementById('cginselector');
    // var cginSelectValue = document.getElementById('cginSelectValue');
    // cginselector.style.left = this.value + "%";
    // cginSelectValue.innerHTML = this.value;


    // CGin_Slider3.oninput = function () {
    //     var value = (this.value - this.min) / (this.max - this.min) * 100;
    //     this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A ' + value + '%,  #575976 ' + value + '%,  #575976 100%)'
    //     CGin_Sliderval3.innerHTML = CGin_Slider3.value;

    //     cginselector.style.left = this.value + "%";
    //     cginSelectValue.innerHTML = this.value;
    //     // cginSelectValue.style.left = this.value + "%";

    // }


// <!-- Range 4 --> 
// var CGin_Slider4 = document.querySelector('#CGin_Slider4');
// var CGin_Sliderval4 = document.querySelector('#CGin_Sliderval4');
// var value = (CGin_Slider4.value-CGin_Slider4.min)/(CGin_Slider4.max-CGin_Slider4.min)*100;
// CGin_Slider4.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 '+ value +'%,  #575976 '+ value +'%,  #575976 100%)'


// CGin_Slider4.oninput = function(){
//     var value = (this.value-this.min)/(this.max-this.min)*100;
//     this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value +'%,  #575976 '+ value +'%,  #575976 100%)'
//     CGin_Sliderval4.innerHTML = CGin_Slider4.value;  
// }


if($(window).width() < 991){
$('.trading-news-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
});
}

// Cashback Gateway video popup 
$("#cashbackVideo").click(function(){
var $this = $(this).find('iframe');
tempSrc = $this.attr('src');
$this.attr('src', "");
$this.attr('src', tempSrc);
});


// Calculator 

// <!-- Range 1 --> 
var CGin_Slider = document.querySelector('#CGin_Slider');
    var CGin_Sliderval = document.querySelector('#CGin_Sliderval');
    var value1 = (CGin_Slider.value-CGin_Slider.min)/(CGin_Slider.max-CGin_Slider.min)*100;
    CGin_Slider.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 '+ value1 +'%,  #575976 '+ value1 +'%,  #575976 100%)';

    var values2 = ['VIP','SILVER','GOLD'];
    var CGin_Sliderval = document.getElementById('CGin_Sliderval');
    CGin_Sliderval.innerHTML = values2[this.value];   

    CGin_Slider.oninput = function(){
        var value1 = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value1 +'%,  #575976 '+ value1 +'%,  #575976 100%)'
        CGin_Sliderval.innerHTML = CGin_Slider.value;

        CGin_Sliderval.innerHTML = values2[this.value]; 
        
        // console.log(values2[this.value])      
    }

    // <!-- Range 2 --> 

    var CGin_Slider2 = document.querySelector('#CGin_Slider2');
    var CGin_Sliderval2 = document.querySelector('#CGin_Sliderval2');
    var value = (CGin_Slider2.value - CGin_Slider2.min) / (CGin_Slider2.max - CGin_Slider2.min) * 100;
    CGin_Slider2.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 ' + value + '%,  #575976 ' + value +
        '%,  #575976 100%)';
    var values3 = [1, 1.5, 2];
    var CGin_Sliderval2 = document.getElementById('CGin_Sliderval2');
    CGin_Sliderval2.innerHTML = values3[this.value];

    if (CGin_Sliderval.innerHTML = "Silver") {
        CGin_Sliderval2.innerHTML = "1.5"
    }

    CGin_Slider2.oninput = function () {
        var value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A ' + value + '%,  #575976 ' + value +'%,  #575976 100%)'
        CGin_Sliderval2.innerHTML = values3[this.value];

    }

    CGin_Slider2.onchange = function () {
        var value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A ' + value + '%,  #575976 ' + value +
            '%,  #575976 100%)'
        CGin_Sliderval2.innerHTML = values3[this.value];
    }
    

    $('.depend').on('change', function() {
        $('.depend').val($(this).val())
        var value1 = (CGin_Slider.value-CGin_Slider.min)/(CGin_Slider.max-CGin_Slider.min)*100;
        CGin_Slider.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value1 +'%,  #575976 '+ value1 +'%,  #575976 100%)'
        var value = (CGin_Slider2.value-CGin_Slider2.min)/(CGin_Slider2.max-CGin_Slider2.min)*100;
        CGin_Slider2.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value +'%,  #575976 '+ value +'%,  #575976 100%)'
        CGin_Sliderval.innerHTML = values2[this.value];
        CGin_Sliderval2.innerHTML = values3[this.value];
        tradlot();
      });

    //   <!-- Range 3 -->

    var CGin_Slider3 = document.querySelector('#CGin_Slider3');
    var CGin_Sliderval3 = document.querySelector('#CGin_Sliderval3');
    var value33 = (CGin_Slider3.value - CGin_Slider3.min) / (CGin_Slider3.max - CGin_Slider3.min) * 100;
    CGin_Slider3.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 ' + value33 + '%,  #575976 ' + value33 +
        '%,  #575976 100%)'
    var ival = 1;

    var cginselector = document.getElementById('cginselector');
    var cginSelectValue = document.getElementById('cginSelectValue');
    cginselector.style.left = ival + "%";
    cginSelectValue.innerHTML = ival;
    CGin_Sliderval3.innerHTML = CGin_Slider3.value;


    CGin_Slider3.oninput = function () {
        var value33 = (CGin_Slider3.value - CGin_Slider3.min) / (CGin_Slider3.max - CGin_Slider3.min) * 100;
        this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A ' + value33 + '%,  #575976 ' + value33 +
            '%,  #575976 100%)'
        CGin_Sliderval3.innerHTML = CGin_Slider3.value;

        cginselector.style.left = this.value + "%";
        cginSelectValue.innerHTML = this.value;
        // cginSelectValue.style.left = this.value + "%";

    }


    //   Range 4 

    var CGin_Slider4 = document.querySelector('#CGin_Slider4');
var CGin_Sliderval4 = document.querySelector('#CGin_Sliderval4');
var value4 = (CGin_Slider4.value-CGin_Slider4.min)/(CGin_Slider4.max-CGin_Slider4.min)*100;
CGin_Slider4.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 '+ value4 +'%,  #575976 '+ value4 +'%,  #575976 100%)'


CGin_Slider4.oninput = function(){
    var value4 = (CGin_Slider4.value-CGin_Slider4.min)/(CGin_Slider4.max-CGin_Slider4.min)*100;
    this.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value4 +'%,  #575976 '+ value4 +'%,  #575976 100%)'
    CGin_Sliderval4.innerHTML = CGin_Slider4.value;
  
}

// Change Values 
var rplot = CGin_Sliderval2.innerHTML;
var dtlot = cginSelectValue.innerHTML;
var tradecount = CGin_Sliderval4.innerHTML;
var maxvalvip = 500;
var maxvalsilver = 1500;
var maxvalgold = 3000;

var amtrbt = rplot * dtlot * tradecount;

$(CGin_Slider).on('change', function () {
    var rplot = CGin_Sliderval2.innerHTML;
    var dtlot = cginSelectValue.innerHTML;
    var tradecount = CGin_Sliderval4.innerHTML;
  $("#test_lot").val(rplot);
    var amtrbt = rplot * dtlot * tradecount;
    
        tradlot();
       
});

$(CGin_Slider3).on('change', function () {
    var rplot = CGin_Sliderval2.innerHTML;
    var dtlot = cginSelectValue.innerHTML;
    var tradecount = CGin_Sliderval4.innerHTML;
    $("#dtrad_lot").val(dtlot);
    var amtrbt = rplot * dtlot * tradecount;

        console.log(amtrbt);

        tradlot();
});

$(CGin_Slider2).on('change', function () {
    var rplot = CGin_Sliderval2.innerHTML;
    var dtlot = cginSelectValue.innerHTML;
    var tradecount = CGin_Sliderval4.innerHTML;
    $("#test_lot").val(rplot);
    var amtrbt = rplot * dtlot * tradecount;
        console.log(amtrbt)

        tradlot();
});

$(CGin_Slider4).on('change', function () {
    var rplot = CGin_Sliderval2.innerHTML;
    var dtlot = cginSelectValue.innerHTML;
    var tradecount = CGin_Sliderval4.innerHTML;
        $("#trade_cnt").val(tradecount);
    var amtrbt = rplot * dtlot * tradecount;
        console.log(amtrbt)
        
        tradlot();
});

var CGin_Slider5 = document.querySelector('#CGin_Slider5');
var CGin_Sliderval5 = document.querySelector('#CGin_Sliderval5');
CGin_Slider5.value = amtrbt;
var value3 = (amtrbt.value-amtrbt.min)/(amtrbt.max-amtrbt.min)*100;
CGin_Slider5.style.background = 'linear-gradient(to right, #ED035A 0%, #5020C9 '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
CGin_Sliderval5.innerHTML = amtrbt;


CGin_Slider5.oninput = function(){
    CGin_Slider5.value = amtrbt;
    var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
    CGin_Slider5.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
    CGin_Sliderval5.innerHTML = amtrbt;
    
  
}
function tradlot(){
       var one = $('#test_lot').val();
       var two = $('#dtrad_lot').val();
       var three = $('#trade_cnt').val();
      
      var amtbrtss = one * two * three;
       if(one && two && three){
        if(one == 1.5){
            if(amtbrtss >= maxvalsilver){
               amtbrtss = maxvalsilver;
                
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
            }
            else{
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
              
            }
        }
        else if (one == 1){
           
            if(amtbrtss >= maxvalvip){
                amtbrtss = maxvalvip;
               
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
            }
            else{
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
               
                CGin_Slider5.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
            }
        }
       else if (one == 2){
        if(amtbrtss >= maxvalgold){
                amtbrtss = maxvalgold;

                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
            }
            else{
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
                }
            }
        }
        else{
            CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
            CGin_Slider5.value = amtbrtss;
            var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
            CGin_Slider5.style.background = 'linear-gradient(to right, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
        }
    }

// Cashback Reward End

$(document).ready(function(){
var lng_blg = location.pathname.split("/");
     if(lng_blg['1'] == "fa"){
// <!-- Range 1 --> 
var CGin_Slider = document.querySelector('#CGin_Slider');
    var CGin_Sliderval = document.querySelector('#CGin_Sliderval');
    var value1 = (CGin_Slider.value-CGin_Slider.min)/(CGin_Slider.max-CGin_Slider.min)*100;
    CGin_Slider.style.background = 'linear-gradient(to left, #ED035A 0%, #5020C9 '+ value1 +'%,  #575976 '+ value1 +'%,  #575976 100%)';

    var values2 = ['VIP','نقره ای','طلایی'];
    var CGin_Sliderval = document.getElementById('CGin_Sliderval');
    CGin_Sliderval.innerHTML = values2[this.value];   

    CGin_Slider.oninput = function(){
        var value1 = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value1 +'%,  #575976 '+ value1 +'%,  #575976 100%)'
        CGin_Sliderval.innerHTML = CGin_Slider.value;

        CGin_Sliderval.innerHTML = values2[this.value]; 
        
        // console.log(values2[this.value])      
    }

    // <!-- Range 2 --> 

    var CGin_Slider2 = document.querySelector('#CGin_Slider2');
    var CGin_Sliderval2 = document.querySelector('#CGin_Sliderval2');
    var value = (CGin_Slider2.value - CGin_Slider2.min) / (CGin_Slider2.max - CGin_Slider2.min) * 100;
    CGin_Slider2.style.background = 'linear-gradient(to left, #ED035A 0%, #5020C9 ' + value + '%,  #575976 ' + value +
        '%,  #575976 100%)';
    var values3 = [1, 1.5, 2];
    var CGin_Sliderval2 = document.getElementById('CGin_Sliderval2');
    CGin_Sliderval2.innerHTML = values3[this.value];

    if (CGin_Sliderval.innerHTML = "نقره ای") {
        CGin_Sliderval2.innerHTML = "1.5"
    }

    CGin_Slider2.oninput = function () {
        var value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A ' + value + '%,  #575976 ' + value +'%,  #575976 100%)'
        CGin_Sliderval2.innerHTML = values3[this.value];

    }

    CGin_Slider2.onchange = function () {
        var value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A ' + value + '%,  #575976 ' + value +
            '%,  #575976 100%)'
        CGin_Sliderval2.innerHTML = values3[this.value];
    }
    

    $('.depend').on('change', function() {
        $('.depend').val($(this).val())
        var value1 = (CGin_Slider.value-CGin_Slider.min)/(CGin_Slider.max-CGin_Slider.min)*100;
        CGin_Slider.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value1 +'%,  #575976 '+ value1 +'%,  #575976 100%)'
        var value = (CGin_Slider2.value-CGin_Slider2.min)/(CGin_Slider2.max-CGin_Slider2.min)*100;
        CGin_Slider2.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value +'%,  #575976 '+ value +'%,  #575976 100%)'
        CGin_Sliderval.innerHTML = values2[this.value];
        CGin_Sliderval2.innerHTML = values3[this.value];
        tradlot();
      });

    //   <!-- Range 3 -->

    var CGin_Slider3 = document.querySelector('#CGin_Slider3');
    var CGin_Sliderval3 = document.querySelector('#CGin_Sliderval3');
    var value33 = (CGin_Slider3.value - CGin_Slider3.min) / (CGin_Slider3.max - CGin_Slider3.min) * 100;
    CGin_Slider3.style.background = 'linear-gradient(to left, #ED035A 0%, #5020C9 ' + value33 + '%,  #575976 ' + value33 +
        '%,  #575976 100%)'
    var ival = 1;

    var cginselector = document.getElementById('cginselector');
    var cginSelectValue = document.getElementById('cginSelectValue');
    cginselector.style.right = ival + "%";
    cginselector.style.left =  "0%";
    cginSelectValue.innerHTML = ival;
    CGin_Sliderval3.innerHTML = CGin_Slider3.value;


    CGin_Slider3.oninput = function () {
        var value33 = (CGin_Slider3.value - CGin_Slider3.min) / (CGin_Slider3.max - CGin_Slider3.min) * 100;
        this.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A ' + value33 + '%,  #575976 ' + value33 +
            '%,  #575976 100%)'
        CGin_Sliderval3.innerHTML = CGin_Slider3.value;

        cginselector.style.right = this.value + "%";
        cginSelectValue.innerHTML = this.value;
        // cginSelectValue.style.left = this.value + "%";

    }


    //   Range 4 

    var CGin_Slider4 = document.querySelector('#CGin_Slider4');
var CGin_Sliderval4 = document.querySelector('#CGin_Sliderval4');
var value4 = (CGin_Slider4.value-CGin_Slider4.min)/(CGin_Slider4.max-CGin_Slider4.min)*100;
CGin_Slider4.style.background = 'linear-gradient(to left, #ED035A 0%, #5020C9 '+ value4 +'%,  #575976 '+ value4 +'%,  #575976 100%)'


CGin_Slider4.oninput = function(){
    var value4 = (CGin_Slider4.value-CGin_Slider4.min)/(CGin_Slider4.max-CGin_Slider4.min)*100;
    this.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value4 +'%,  #575976 '+ value4 +'%,  #575976 100%)'
    CGin_Sliderval4.innerHTML = CGin_Slider4.value;
  
}

// Change Values 
var rplot = CGin_Sliderval2.innerHTML;
var dtlot = cginSelectValue.innerHTML;
var tradecount = CGin_Sliderval4.innerHTML;
var maxvalvip = 500;
var maxvalsilver = 1500;
var maxvalgold = 3000;

var amtrbt = rplot * dtlot * tradecount;

$(CGin_Slider).on('change', function () {
    var rplot = CGin_Sliderval2.innerHTML;
    var dtlot = cginSelectValue.innerHTML;
    var tradecount = CGin_Sliderval4.innerHTML;
  $("#test_lot").val(rplot);
    var amtrbt = rplot * dtlot * tradecount;
    
        tradlot();
       
});

$(CGin_Slider3).on('change', function () {
    var rplot = CGin_Sliderval2.innerHTML;
    var dtlot = cginSelectValue.innerHTML;
    var tradecount = CGin_Sliderval4.innerHTML;
    $("#dtrad_lot").val(dtlot);
    var amtrbt = rplot * dtlot * tradecount;

        console.log(amtrbt);

        tradlot();
});

$(CGin_Slider2).on('change', function () {
    var rplot = CGin_Sliderval2.innerHTML;
    var dtlot = cginSelectValue.innerHTML;
    var tradecount = CGin_Sliderval4.innerHTML;
    $("#test_lot").val(rplot);
    var amtrbt = rplot * dtlot * tradecount;
        console.log(amtrbt)

        tradlot();
});

$(CGin_Slider4).on('change', function () {
    var rplot = CGin_Sliderval2.innerHTML;
    var dtlot = cginSelectValue.innerHTML;
    var tradecount = CGin_Sliderval4.innerHTML;
        $("#trade_cnt").val(tradecount);
    var amtrbt = rplot * dtlot * tradecount;
        console.log(amtrbt)
        
        tradlot();
});

var CGin_Slider5 = document.querySelector('#CGin_Slider5');
var CGin_Sliderval5 = document.querySelector('#CGin_Sliderval5');
CGin_Slider5.value = amtrbt;
var value3 = (amtrbt.value-amtrbt.min)/(amtrbt.max-amtrbt.min)*100;
CGin_Slider5.style.background = 'linear-gradient(to left, #ED035A 0%, #5020C9 '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
CGin_Sliderval5.innerHTML = amtrbt;


CGin_Slider5.oninput = function(){
    CGin_Slider5.value = amtrbt;
    var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
    CGin_Slider5.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
    CGin_Sliderval5.innerHTML = amtrbt;
    
  
}
function tradlot(){
       var one = $('#test_lot').val();
       var two = $('#dtrad_lot').val();
       var three = $('#trade_cnt').val();
      
      var amtbrtss = one * two * three;
       if(one && two && three){
        if(one == 1.5){
            if(amtbrtss >= maxvalsilver){
               amtbrtss = maxvalsilver;
                
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
            }
            else{
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
              
            }
        }
        else if (one == 1){
           
            if(amtbrtss >= maxvalvip){
                amtbrtss = maxvalvip;
               
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
            }
            else{
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
               
                CGin_Slider5.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
            }
        }
       else if (one == 2){
        if(amtbrtss >= maxvalgold){
                amtbrtss = maxvalgold;

                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
            }
            else{
                CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
                CGin_Slider5.value = amtbrtss;
                 var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
                
                 CGin_Slider5.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
                }
            }
        }
        else{
            CGin_Sliderval5.innerHTML = amtbrtss.toFixed(2);
            CGin_Slider5.value = amtbrtss;
            var value3 = (CGin_Slider5.value-CGin_Slider5.min)/(CGin_Slider5.max-CGin_Slider5.min)*100;
            CGin_Slider5.style.background = 'linear-gradient(to left, #5020C9 0%, #ED035A '+ value3 +'%,  #575976 '+ value3 +'%,  #575976 100%)';
        }
    }

}
});




// Trading nav slide
 $("#tile-1 .nav-tabs a").click(function() {
  var position = $(this).parent().position();
  var width = $(this).parent().width();
    $("#tile-1 .slider").css({"left":+ position.left,"width":width});
});
var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tile-1 .nav-tabs .active").position();
$("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});