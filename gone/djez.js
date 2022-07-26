window.onload = function() {
    const EFFECT = document.querySelector('header');
    const efekt2 = document.querySelector('.deo')
    
    window.addEventListener('scroll', scrollEffect);

    function scrollEffect () {
        if (window.scrollY>= 0) {
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateY(10px)';
            EFFECT.style.transition = '1s ease-in-out';
            
        } 
        else {
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateX(10px)';
            efekt2.style.opacity = '0';
            efekt2.style.transform = 'translateX(-50px)';
        }
    }
    scrollEffect();
}

let controller;
let slideScene;
let pageScene;
let detailScene;

function animateSlides() {
    controller = new ScrollMagic.Controller();

    const sliders = document.querySelectorAll(".slide");
    const nav = document.querySelector(".nav-header");
}

const burger = document.querySelector(".burger");

function activeCursor(e) {
  const item = e.target;
  if (item.id === "logo" || item.classList.contains("burger")) {
    mouse.classList.add("nav-active");
  } else {
    mouse.classList.remove("nav-active");
  }
}
function navToggle(e) {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
      gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
      gsap.to("#logo", 0.5, { color: "black" });
      gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
      document.body.classList.add("hide");
    } else {
      e.target.classList.remove("active");
      gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "black" });
      gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "black" });
      gsap.to("#logo", 1, { color: "#242038" });
      gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
      document.body.classList.remove("hide");
    }
  }

  burger.addEventListener("click", navToggle);

  const but = document.querySelector('.izomatski');

  but.addEventListener('onClick', ljeb);

  function ljeb() {
    window.scrollTo(300, 500);
  }





