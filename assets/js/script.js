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

/***************************FONCTION POUR GÉNÉRER DES ÉTOILES***************************/

// Fonction pour générer des étoiles
function createStars() {
  const starryBackground = document.querySelector(".starry-background");
  const numberOfStars = 200;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Positionnement aléatoire des étoiles
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";

    // Taille aléatoire des étoiles pour un effet plus réaliste
    const starSize = Math.random() * 2;
    star.style.width = starSize + "px";
    star.style.height = starSize + "px";

    starryBackground.appendChild(star);
  }
}

// Appel de la fonction pour générer les étoiles
createStars();