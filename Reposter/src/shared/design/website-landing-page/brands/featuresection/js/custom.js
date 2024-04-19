(function () {
  "use strict";

  // MENU
  var navbarLinks = document.querySelectorAll(".navbar-collapse a");
  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("here1");
      document.querySelector(".navbar-collapse").classList.remove("show");
    });
  });

  // CUSTOM LINK
  var smoothScrollLinks = document.querySelectorAll(".smoothscroll");
  smoothScrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("here2");
      var targetId = this.getAttribute("href");
      var targetElement = document.querySelector(targetId);
      var navbarHeight = document.querySelector(".navbar").offsetHeight;
      scrollToElement(targetElement, navbarHeight);
    });
  });

  function scrollToElement(element, navHeight) {
    var offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    var totalScroll = offsetTop - navHeight;
    window.scrollTo({
      top: totalScroll,
      behavior: "smooth",
    });
  }

  // SCROLL EVENT
  window.addEventListener("scroll", function () {
    function isScrollIntoView(elem) {
      var docViewTop = window.pageYOffset;
      var docViewBottom = docViewTop + window.innerHeight;
      var elemTop = elem.getBoundingClientRect().top + window.pageYOffset;
      var elemBottom = elemTop + elem.offsetHeight * 0.5;

      if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }

      var MainTimelineContainer = document.querySelector(
        "#vertical-scrollable-timeline"
      );
      var MainTimelineContainerBottom =
        MainTimelineContainer.getBoundingClientRect().bottom -
        window.innerHeight * 0.5;
      MainTimelineContainer.querySelector(".inner").style.height =
        MainTimelineContainerBottom + "px";
    }

    var timelineItems = document.querySelectorAll(
      "#vertical-scrollable-timeline li"
    );
    timelineItems.forEach(isScrollIntoView);
  });
})();
