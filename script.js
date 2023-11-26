let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".reviews-slider", {
  grabCursor: true,
  loop: true,
  // slidesPerView: 1,
  spaceBetween: 20,

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let loadMoreBtn = document.querySelector(".load-more .btn");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container .box")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }

  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};

// let loadMoreBtn = document.querySelector(".events .load-more .btn");
// let currentItem = 3;

// loadMoreBtn.onclick = () => {
//   let boxes = [...document.querySelectorAll(".events .box-container .box")];
//   for (var i = currentItem; i < currentItem + 3; i++) {
//     boxes[i].style.display = "inline-block";
//   }

//   currentItem += 3;

//   if (currentItem >= boxes.length) {
//     loadMoreBtn.style.display = "none";
//   }
// };

// let loadmoreBtn = document.querySelector(".blog-article .load-more .btn");
// let nowItem = 3;

// loadmoreBtn.onclick = () => {
//   let boxes = [
//     ...document.querySelectorAll(".blog-article .box-container .box"),
//   ];
//   for (var i = nowItem; i < nowItem + 3; i++) {
//     boxes[i].style.display = "inline-block";
//   }

//   nowItem += 3;

//   if (nowItem >= boxes.length) {
//     loadmoreBtn.style.display = "none";
//   }
// };

// var swiper = new Swiper(".home-slider", {
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },
// });

(() => {
  const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      // prevent default anchor click behavior
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      // if menuItemHasChildren is already expanded, collapse it
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        // collapse existing expanded menuItemHasChildren
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        // expand new menuItemHasChildren
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  function collapseSubMenu() {
    navMenu
      .querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
    navMenu
      .querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  }
  function resizeFix() {
    // if navMenu is open ,close it
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }
    // if menuItemHasChildren is expanded , collapse it
    if (navMenu.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();
