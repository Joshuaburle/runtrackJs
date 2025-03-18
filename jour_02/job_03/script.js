// Initialisation du compteur
let compteur = 0;

function addOne() {
    compteur++; // Incrémente la valeur
    document.getElementById("compteur").textContent = compteur; // Met à jour l'affichage
}

// Ajoute un écouteur d'événement au bouton
document.getElementById("button").addEventListener("click", addOne);
