async function chargerUtilisateurs() {
    try {
        let response = await fetch("utilisateur.json");
        let utilisateurs = await response.json();

        let tableBody = document.getElementById("user-table-body");
        tableBody.innerHTML = ""; // Vider le tableau avant d'ajouter les nouvelles données

        utilisateurs.forEach(utilisateur => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${utilisateur.id}</td>
                <td>${utilisateur.nom}</td>
                <td>${utilisateur.prenom}</td>
                <td>${utilisateur.email}</td>
            `;
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error("Erreur Fetch :", error);
    }
}

document.getElementById("update-btn").addEventListener("click", chargerUtilisateurs);

chargerUtilisateurs();
