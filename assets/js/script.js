/***************************DARK MODE***************************/

// On récupère notre input
const input = document.querySelector("input");
// On récupère notre body
const body = document.querySelector("body");
// On récupère notre navbar
const navbar = document.getElementById("navbar");

// Méthode "classList.toggle" pour ajouter ou supprimer la classe CSS "light"
const lightmode = () => {
  body.classList.toggle("light");
  navbar.classList.toggle("light");
  // On sauvegarde la préférence de l'utilisateur dans le localStorage
  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
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