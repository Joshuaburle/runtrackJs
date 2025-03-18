function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b); // Tri croissant
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a); // Tri décroissant
    } else {
        return "Erreur : l'ordre doit être 'asc' ou 'desc'.";
    }
}

// Tests
console.log(tri([5, 2, 9, 1, 7], "asc"));  // [1, 2, 5, 7, 9]
console.log(tri([8, 3, 6, 2, 4], "desc")); // [8, 6, 4, 3, 2]
console.log(tri([10, 15, 2, 30], "asc"));  // [2, 10, 15, 30]
console.log(tri([20, 1, 5, 17], "wrong")); // Erreur
