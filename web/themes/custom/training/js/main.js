(function (jQuery) {
  Drupal.behaviors.drupalBookOwlCarousel = {
    attach: function (context, settings) {
      jQuery(".search-sec .search-icon").click(function () {
        var displays = $("#search-block-form").css("visibility");
        if (displays == "hidden") {
          $("#search-block-form").css("visibility", "visible");
          $(".search-icon").addClass("fa-light fa-xmark");
          $(".search-icon").removeClass("fa fa-search");
        } else {
          $("#search-block-form").css("visibility", "hidden");
          $(".search-icon").addClass("fa fa-search");
          $(".search-icon").removeClass("fa-light fa-xmark");
        }
      });
      // JS for Mobile Menu Toggle
      // let hamburger = document.querySelector(".hamburger");
      // let menu = document.querySelector(".nav");

      // hamburger.addEventListener("click", function () {
      //   hamburger.classList.toggle("isactive");
      //   menu.classList.toggle("active");
      // });
      // JS for Mobile Menu Toggle
    },
  };
})(jQuery, Drupal);
