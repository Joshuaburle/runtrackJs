document.addEventListener("DOMContentLoaded", function () {
    // Gestion de la connexion
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const loginMessage = document.getElementById("login-message");
        
        if (email.endsWith("@laplateforme.io")) {
            loginMessage.textContent = "Connexion réussie !";
            loginMessage.classList.remove("text-danger");
            loginMessage.classList.add("text-success");
        } else {
            loginMessage.textContent = "Accès réservé aux membres de La Plateforme_";
            loginMessage.classList.remove("text-success");
            loginMessage.classList.add("text-danger");
        }
    });

    // Gestion du calendrier
    document.getElementById("save-date").addEventListener("click", function () {
        const dateInput = document.getElementById("date-picker");
        const selectedDate = dateInput.value;
        if (!selectedDate) return;
        
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = selectedDate;
        document.getElementById("dates-list").appendChild(listItem);
        dateInput.value = "";
    });
});
