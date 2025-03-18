// Séquence du Code Konami
const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];

let konamiIndex = 0;

document.addEventListener("keydown", function(event) {
    // Vérifie si la touche correspond à la séquence Konami
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonamiMode();
            konamiIndex = 0; // Reset après activation
        }
    } else {
        konamiIndex = 0; // Réinitialiser si mauvaise touche
    }
});

// Fonction d'activation du mode Konami
function activateKonamiMode() {
    document.body.classList.add("konami-mode");
    document.getElementById("title").textContent = "🚀 Mode Konami Activé !";
}
