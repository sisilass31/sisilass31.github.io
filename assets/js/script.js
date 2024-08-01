/***************************DARK MODE***************************/

// On récupère notre input
const input = document.querySelector("input");
// On récupère notre body
const body = document.querySelector("body");
// On récupère notre navbar
const navbar = document.getElementById("navbar");
// On récupère le nom
const nom = document.getElementById("name-top");
// On récupère la carte
const map = document.getElementById("map");
// On récupère nos link
const contact = document.getElementById("contact-container");

// Méthode "classList.toggle" pour ajouter ou supprimer la classe CSS "light"
const lightmode = () => {
  body.classList.toggle("light");
  navbar.classList.toggle("light");
  nom.classList.toggle("light");
  map.classList.toggle("light");
  contact.classList.toggle("light");
};

// On vérifie la préférence de l'utilisateur lors du chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.getItem("theme") || "dark";
  if (currentTheme === "light") {
    body.classList.add("light");
    navbar.classList.add("light");
    input.checked = true;
  }
});

// Lorsque l'on clique sur l'input, on appelle la fonction lightmode
input.onchange = lightmode;

/***************************DARK MODE***************************/

const navItems = document.getElementsByClassName("nav-item");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    for (let j = 0; j < navItems.length; j++)
      navItems[j].classList.remove("active");

    navItems[i].classList.add("active");
  });
}

/***************************DARK MODE***************************/

/***************************PARTICLES***************************/

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#642da1" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.29988083682536654,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#642da1",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

/***************************PARTICLES***************************/
