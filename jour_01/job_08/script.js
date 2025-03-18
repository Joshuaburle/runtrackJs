// Fonction pour vérifier si un nombre est premier
function estPremier(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Fonction pour calculer la somme si les deux nombres sont premiers
function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Tests
console.log(sommeNombresPremiers(3, 7));  // 10 (car 3 et 7 sont premiers)
console.log(sommeNombresPremiers(4, 5));  // false (car 4 n'est pas premier)
console.log(sommeNombresPremiers(11, 13)); // 24 (car 11 et 13 sont premiers)
console.log(sommeNombresPremiers(8, 9));  // false (car aucun n'est premier)
