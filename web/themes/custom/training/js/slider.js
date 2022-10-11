(function (jQuery) {
  Drupal.behaviors.drupalCarousel = {
    attach: function (context, settings) {
      if (jQuery(".sf-accordion-toggle .sf-expanded").is(":visible")) {
        jQuery("body").addClass("fixed-position");
      } else {
        jQuery("body").removeClass("fixed-position");
      }
      var blogs = ".digital-section .view-digital-platform .view-content ";
      jQuery(blogs).owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        items: 3,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          768: {
            items: 1,
            nav: true,
          },
          1024: {
            items: 1,
            nav: true,
          },
        },
      });
      jQuery(blogs).addClass("owl-carousel");

      var $sliderItemTotal = jQuery(".slider-item-total"),
        $sliderItemCurrent = jQuery(".slider-item-current");

      jQuery(".main-slider").flexslider({
        animation: "slide",
        directionNav: true,
        autoplay: false,
        slideshow: true,
        touch: true,
        keyboard: true,
        pauseOnHover: true,
        start: function (item) {
          slideCounter(item);
        },
        after: function (item) {
          slideCounter(item);
        },
      });

      function slideCounter(item) {
        $sliderItemCurrent.text("0" + (item.currentSlide + 1));
        $sliderItemTotal.text("0" + item.count);
      }
    },
  };
})(jQuery, Drupal);
