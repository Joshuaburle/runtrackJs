document.getElementById("button").addEventListener("click", function() {
    fetch("expression.txt")
        .then(response => response.text()) // Convertir la réponse en texte
        .then(data => {
            document.getElementById("expression").textContent = data; // Afficher le texte
        })
        .catch(error => console.error("Erreur de Fetch :", error)); // Gérer les erreurs
});
