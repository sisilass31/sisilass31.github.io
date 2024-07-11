/***************************DARK MODE***************************/

// on récupère notre input
const input = document.querySelector("input");
// on récupère notre body
const body = document.querySelector("body");
// on récupère notre link
const navbar = document.getElementById("navbar");

// méthode "classList.toggle" pour ajouter ou supprimer la classe CSS "dark"
const darkmode = () => {
  body.classList.toggle("dark");
  navbar.classList.toggle("dark");
};

//lorsque l'on clique sur l'input on appel la fonction
input.onchange = darkmode;

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