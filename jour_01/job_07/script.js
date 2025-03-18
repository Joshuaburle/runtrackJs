function jourTravaille(date) {
    // Liste des jours fériés en France pour 2024
    const joursFeries2024 = [
        "2024-01-01", // Nouvel An
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-09", // Ascension
        "2024-05-20", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice 1918
        "2024-12-25"  // Noël
    ];

    // Convertir la date en format YYYY-MM-DD
    let dateFormat = date.toISOString().split('T')[0];

    // Vérifier si c'est un jour férié
    if (joursFeries2024.includes(dateFormat)) {
        console.log(`Le ${dateFormat} est un jour férié.`);
        return;
    }

    // Vérifier si c'est un week-end
    let jour = date.getDay(); // 0 = Dimanche, 6 = Samedi
    if (jour === 0 || jour === 6) {
        console.log(`Non, le ${dateFormat} est un week-end.`);
        return;
    }

    // Sinon, c'est un jour travaillé
    console.log(`Oui, le ${dateFormat} est un jour travaillé.`);
}

// Tester avec différentes dates
jourTravaille(new Date("2024-05-01")); // Férié
jourTravaille(new Date("2024-06-03")); // Travaillé
jourTravaille(new Date("2024-07-14")); // Férié
jourTravaille(new Date("2024-08-17")); // Week-end
