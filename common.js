const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobil-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {

      const target = +counter.getAttribute("data-target");

      const c = +counter.innerText;

      const increment = target / 100;

      if (c < target) {

        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}

// SLIDER

document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  const updateSlides = () => {

    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? "block" : "none";
    });
  };

  updateSlides();

  // Arrow buttons
  document
    .getElementById("ctrl-btn-arrow-left")
    .addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlides();
    });

  document
    .getElementById("ctrl-btn-arrow-right")
    .addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlides();
    });

  // Circle buttons
  document
    .querySelectorAll(".ctrl-btn-circle button")
    .forEach((button, index) => {
      button.addEventListener("click", () => {
        currentSlide = index;
        updateSlides();
      });
    });
});


document.getElementById("overview-btn").addEventListener("click", function () {
  showImage("chng-img-1");
});

document.getElementById("engines-btn").addEventListener("click", function () {
  showImage("chng-img-2");
});

document
  .getElementById("landing-legs-btn")
  .addEventListener("click", function () {
    showImage("chng-img-3");
  });

function showImage(imgId) {

  document.getElementById("chng-img-1").style.display = "none";
  document.getElementById("chng-img-2").style.display = "none";
  document.getElementById("chng-img-3").style.display = "none";


  document.getElementById(imgId).style.display = "block";
}

const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", () => {
  const video = document.querySelector("video");
  video.play();
  playBtn.style.display = "none";
});



