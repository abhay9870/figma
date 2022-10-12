(function (jQuery) {
  Drupal.behaviors.drupalBookOwlCarousel = {
    attach: function (context, settings) {
      jQuery(".search-sec .search-icon").click(function () {
        var displays = jQuery("#search-block-form").css("visibility");
        if (displays == "hidden") {
          jQuery("#search-block-form").css("visibility", "visible");
          jQuery(".search-icon").addClass("fa-light fa-xmark");
          jQuery(".search-icon").removeClass("fa fa-search");
        } else {
          jQuery("#search-block-form").css("visibility", "hidden");
          jQuery(".search-icon").addClass("fa fa-search");
          jQuery(".search-icon").removeClass("fa-light fa-xmark");
        }
      });
    },
  };
})(jQuery, Drupal);
