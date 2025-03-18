function showhide() {
    let article = document.getElementById("article"); // Sélectionne l'article
    let button = document.getElementById("button"); // Sélectionne le bouton

    if (article.style.display === "none") {
        article.style.display = "block"; // Affiche l'article
        button.textContent = "Masquer l'article"; // Change le texte du bouton
    } else {
        article.style.display = "none"; // Cache l'article
        button.textContent = "Afficher l'article"; // Remet le texte initial
    }
}

// Ajoute un écouteur d'événement au bouton
document.getElementById("button").addEventListener("click", showhide);
