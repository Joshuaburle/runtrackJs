function jsonValueKey(jsonString, key) {
    try {
        let jsonObj = JSON.parse(jsonString); // Convertir la chaîne en objet JSON
        return jsonObj[key] !== undefined ? jsonObj[key] : "Clé introuvable";
    } catch (error) {
        return "Erreur : JSON invalide";
    }
}

// Exemple d'utilisation
let jsonData = '{"name": "John", "age": 30, "city": "Marseille"}';

console.log(jsonValueKey(jsonData, "city")); // Retourne "Marseille"
console.log(jsonValueKey(jsonData, "age"));  // Retourne 30
console.log(jsonValueKey(jsonData, "email")); // Retourne "Clé introuvable"
console.log(jsonValueKey("invalid json", "name")); // Retourne "Erreur : JSON invalide"
