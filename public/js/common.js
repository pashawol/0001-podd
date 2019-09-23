"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js");
var menu = $(".menu-mobile--js");
jQuery(document).ready(function ($) {
  // полифил для object-fit
  objectFitImages(); // Picture element HTML5 shiv

  document.createElement("picture"); // для свг

  svg4everybody({});
  JSCCommon.modalCall();
  JSCCommon.tabscostume('tabs');
  JSCCommon.mobileMenu();
  JSCCommon.inputMask(); // добавляет подложку для pixel perfect

  $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/podd.png);"></div>'); // /добавляет подложку для pixel perfect
  // /закрыть/открыть мобильное меню

  function heightses() {
    var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
    // $(".otz__item .text-wrap ").height('auto').equalHeights();
    // 
    // скрывает моб меню

    var topH = $("header ").innerHeight();
    $(window).scroll(function () {
      if ($(this).scrollTop() > topH) {
        $('.top-nav  ').addClass('fixed');
      } else {
        $('.top-nav  ').removeClass('fixed');
      }
    }); // конец добавил

    if (window.matchMedia("(min-width: 768px)").matches) {
      btnToggle.removeClass("on"); // $("body").removeClass("fixed");

      menu.removeClass("active");
      $("body").removeClass("fixed");
    }
  }

  $(window).resize(function () {
    heightses();
  });
  heightses(); // листалка по стр

  $(" .top-nav li a, .scroll-link").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({
      scrollTop: destination
    }, 1100);
    return false;
  });
  var icon = '<svg\
	xmlns="http://www.w3.org/2000/svg"\
	xmlns:xlink="http://www.w3.org/1999/xlink"\
	width="21.5px" height="32.5px">\
 <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="3px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"\
	d="M15.513,29.020 L2.117,15.625 L16.137,1.604 "/>\
 </svg>';
  var arrl2 = ' <div class="r">' + icon,
      arrr2 = ' <div class="l">' + icon; // // карусель

  var defaultSlide = {
    speed: 600,
    infinite: true,
    arrows: true,
    mobileFirst: true,
    prevArrow: arrr2,
    nextArrow: arrl2,
    // autoplay: true,
    // autoplaySpeed: 6000,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }]
  };
  $('.s-rews__slider--js').slick(_objectSpread({}, defaultSlide, {
    dots: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }]
  }));
  $('.s-gal__slider--js').slick(_objectSpread({}, defaultSlide)); // $(".wow-wrap").each(function () {
  // const wowAnim = $(this).find(".s-dop__col," +
  //                 ".s-pick__col," +
  //                 ".s-condition__col");
  // wowAnim.each(function(i){
  // wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");
  //    const wow = new WOW({ mobile: false });
  //         wow.init();
  // });
  // });
});
var JSCCommon = {
  // часть вызов скриптов здесь, для использования при AJAX
  // функции для запуска lazy
  // /LazyFunction
  modalCall: function modalCall() {
    $(".link-modal").fancybox({
      arrows: false,
      infobar: false,
      touch: false // type : 'inline',

    });
    $(".modal-close-js").click(function () {
      $.fancybox.close();
    });
  },
  // /magnificPopupCall
  mobileMenu: function mobileMenu() {
    // закрыть/открыть мобильное меню
    btnToggle.click(function () {
      btnToggle.toggleClass("on"); // $("body").toggleClass("fixed");

      menu.toggleClass("active");
      $("body, html").toggleClass("fixed");
      return false;
    }); // $('.menu-mobile--js ul li a').on('click', function () {
    // 	$(".menu-mobile--js .toggle-mnu").click();
    // });

    $(document).mouseup(function (e) {
      var container = $(".menu-mobile--js.active");

      if (container.has(e.target).length === 0) {
        btnToggle.removeClass("on"); // $("body").toggleClass("fixed");

        menu.removeClass("active");
        $("body, html").removeClass("fixed");
      }
    });
  },
  // /mobileMenu
  // табы  . 
  tabscostume: function tabscostume(tab) {
    $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
      $(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
    });
  },
  // /табы  . 
  // /CustomYoutubeBlock
  inputMask: function inputMask() {
    // mask for input
    $('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
  } // /inputMask

}; // JSCCommon.LazyFunction();

/***/