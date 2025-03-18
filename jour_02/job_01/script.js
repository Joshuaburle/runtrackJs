function citation() {
    let article = document.getElementById("citation"); // Sélectionne l'article
    console.log(article.textContent); // Affiche son contenu dans la console
}

// Ajoute un écouteur d'événement au bouton
document.getElementById("button").addEventListener("click", citation);
