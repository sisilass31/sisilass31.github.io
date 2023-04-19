// on récupère notre input
const input = document.querySelector("input");
// on récupère notre body
const body = document.querySelector("body");

// méthode "classList.toggle" pour ajouter ou supprimer la classe CSS "dark"
const darkmode = () => {
  body.classList.toggle("dark");
};

//lorsque l'on clique sur l'input on appel la fonction
input.onchange = darkmode;