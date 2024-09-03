
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

/***************************PARTICLES***************************/

/***************************STATS***************************/

document.addEventListener("DOMContentLoaded", () => {
    try {
        // Assurez-vous que Stats.js est défini
        if (typeof Stats !== 'undefined') {
            // Initialisation de Stats.js
            const stats = new Stats();
            stats.setMode(0); // 0: FPS, 1: MS
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.body.appendChild(stats.domElement);

            // Fonction de mise à jour des statistiques
            const updateStats = function () {
                try {
                    stats.begin();
                    stats.end();

                    // Mise à jour du nombre de particules si l'élément est disponible
                    const countParticles = document.querySelector(".js-count-particles");
                    if (countParticles && window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                        countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
                    }

                    requestAnimationFrame(updateStats);
                } catch (innerError) {
                    console.error("Erreur lors de la mise à jour des statistiques:", innerError);
                }
            };

            // Démarrer la mise à jour
            requestAnimationFrame(updateStats);
        } else {
            console.warn("Stats.js n'est pas défini.");
        }
    } catch (error) {
        console.error("Erreur lors de l'initialisation de Stats.js:", error);
    }
});

/***************************STATS***************************/