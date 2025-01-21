// Responsive Toggle Menu
// document.addEventListener("DOMContentLoaded", () => {
//     const menuToggle = document.getElementById("menu-toggle");
//     const navMenu = document.getElementById("nav-menu");

//     menuToggle.addEventListener("click", () => {
//         navMenu.classList.toggle("active");
//         menuToggle.classList.toggle("active");
//     });
// });


// Back to Top functionality
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});