document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scrollToTop");

  // Show button when user scrolls down
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });

  // Scroll to top when button is clicked
  scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
