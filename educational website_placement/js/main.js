// change navbar styles on scroll

addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide the faq answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");

    // change the icon
    const icon = element.querySelector(".faq-icon i");
    if (icon.className == "fa-solid fa-plus") {
      icon.className = "fa-sharp fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// show/hide the nav menu

const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

closebtn.style.display = "none";
menubtn.style.display = "none";

const mediaquery = window.matchMedia("(max-width: 1024px)");

mediaquery.addEventListener("change", (event) => {
  if (event.matches) {
    menubtn.style.display = "block";
    menu.style.display = "none";
  } else {
    menubtn.style.display = "none";
    menu.style.display = "flex";
  }
});

menubtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});

closebtn.addEventListener("click", () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
});
