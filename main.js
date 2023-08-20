let menuOpen = document.querySelector(".menu-btn-open");
let menuClose = document.querySelector(".menu-btn-close");
let navbar = document.getElementById("navbar");

let menuLink = document.querySelector(".menu");
let back_btn = document.querySelector(".back-btn");
let search_btn = document.querySelector(".search-btn");

let overlay = document.getElementById("overlay");

let window_Width = window.addEventListener("change", function () {
  return window.innerWidth;
});

// Open Navbar
menuOpen.addEventListener("click", function () {
  navbar.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
  menuOpen.classList.toggle("hidden");
});

// Close Navbar
menuClose.addEventListener("click", function () {
  navbar.classList.toggle("hidden");
  menuOpen.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
  menuLink.classList.add("hidden");
  if (window.innerWidth < 768) {
    search_btn.classList.remove("hidden");
    back_btn.classList.add("hidden");
  }
});

// open Navbar menulinks
document.querySelectorAll(".main-nav-item-link").forEach((link) => {
  link.addEventListener("click", openNavLink);
});

function openNavLink(e) {
  menuLink.classList.remove("hidden");
  // overlay to show
  if (window_Width >= 768) {
    overlay.classList.add("overlay");
  }
  // Nav to work and highlight active nav link
  const targetElement = e.currentTarget;
  menuLink.classList.add("toppest");
  document.querySelectorAll(".main-nav-item-link").forEach((link) => {
    if (link !== targetElement) {
      link.classList.add("topper");
      targetElement.classList.remove("topper");
      targetElement.classList.add("toppest");
    } else {
      link.classList.remove("topper");
      targetElement.classList.add("toppest");
    }
  });
  if (window.innerWidth < 768) {
    search_btn.classList.add("hidden");
    back_btn.classList.remove("hidden");
  }
}
// Close menu on click anywhere
document.addEventListener("mouseup", function (e) {
  if (!menuLink.contains(e.target)) {
    menuLink.classList.add("hidden");
    document.querySelectorAll(".main-nav-item-link").forEach((link) => {
      link.classList.remove("topper");
      link.classList.remove("toppest");
      document.getElementById("overlay").classList.remove("overlay");
    });
  }
});
// back button functionality
back_btn.addEventListener("click", function () {
  menuLink.classList.add("hidden");
  targetElement.classList.remove("toppest");
  if (window.innerWidth < 768) {
    back_btn.classList.add("hidden");
    search_btn.classList.remove("hidden");
  }
});

// Search button Functionality
search_btn.addEventListener("click", function () {
  let search_btn_icon = document.querySelector(".search-btn-icon");
  document.querySelector(".search-input").classList.toggle("hidden");
  document.querySelector(".search-adv-btn").classList.toggle("hidden");
  if (search_btn.classList.contains("search-btn-cross")) {
    search_btn.classList.remove("search-btn-cross");
    menuClose.classList.remove("hidden");
    search_btn_icon.src = "/search.svg";
  } else {
    search_btn.classList.add("search-btn-cross");
    menuClose.classList.add("hidden");
    search_btn_icon.src = "/cross.svg";
  }
});
