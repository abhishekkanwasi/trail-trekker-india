/*$(window).load(function() {
  $('#loading').fadeOut('100');
});*/

var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: "-=875",
    delay: (el, i, l) => 110 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 150) {
      $(".navbar-dark").removeClass("navbar-dark").addClass("navbar-light");
      $(".nav-style").removeClass("nav-style").addClass("nav-style-Onscroll");
      $("#main_logo").attr("src", "img/trekveda-logo-update-color-version.png");
      $("#menuicon").css("color", "#ff6219");
    } else {
      $(".navbar-light").removeClass("navbar-light").addClass("navbar-dark");
      $(".nav-style-Onscroll")
        .removeClass("nav-style-Onscroll")
        .addClass("nav-style");
      $("#main_logo").attr("src", "img/trekveda-logo-update-white-version.png");
      $("#menuicon").css("color", "gray");
    }
  });
});

jQuery(document).ready(function () {
  function resizeForm() {
    var width =
      window.innerWidth > 0
        ? window.innerWidth
        : document.documentElement.clientWidth;
    if (width > 992) {
      var scroll_pos = 0;
      $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 200) {
          $(".sticky_nav_icon_continer").css("display", "flex");
        } else {
          $(".sticky_nav_icon_continer").css("display", "none");
        }
      });
    } else {
      if (scroll_pos > 150) {
        $(".sticky_nav_icon_continer").css("display", "none");
      } else {
        $(".sticky_nav_icon_continer").css("display", "none");
      }
    }
  }
  window.onresize = resizeForm;
  resizeForm();
});

$(document).ready(function () {
  // jQuery code
  // Prevent closing from click inside dropdown
  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  // make it as accordion for smaller screens
  if ($(window).width() < 992) {
    $(".dropdown-menu a").click(function (e) {
      e.preventDefault();
      if ($(this).next(".submenu").length) {
        $(this).next(".submenu").toggle();
      }
      $(".dropdown-menu").on("hide.bs.dropdown", function () {
        $(this).find(".submenu").hide();
      });
    });
  }
}); // jquery ends
