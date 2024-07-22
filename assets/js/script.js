/***************************DARK MODE***************************/

// On récupère notre input
const input = document.querySelector("input");
// On récupère notre body
const body = document.querySelector("body");
// On récupère notre navbar
const navbar = document.getElementById("navbar");
// On récupère nos link
const links = document.querySelector("a");

// Méthode "classList.toggle" pour ajouter ou supprimer la classe CSS "light"
const lightmode = () => {
  body.classList.toggle("light");
  navbar.classList.toggle("light");
  links.classList.toggle("light");

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

const navItems = document.getElementsByClassName('nav-item');

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        for(let j = 0; j < navItems.length; j++) 
            navItems[j].classList.remove('active');
        
        navItems[i].classList.add('active');
    });
}

