document.addEventListener("keydown", function(event) {
    let textarea = document.getElementById("keylogger");
    
    // Vérifie si la touche est une lettre (a-z)
    if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        if (document.activeElement === textarea) {
            // Si le focus est sur le textarea, ajouter deux fois la lettre
            textarea.value += event.key + event.key;
        } else {
            // Sinon, ajouter la lettre une seule fois
            textarea.value += event.key;
        }
    }
});
