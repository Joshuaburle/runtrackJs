function bisextile(année) {
    // Une année est bissextile si elle est divisible par 4 et
    // soit non divisible par 100, soit divisible par 400
    if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test de la fonction avec quelques exemples
console.log(bisextile(2024)); // true (bissextile)
console.log(bisextile(2023)); // false (pas bissextile)
console.log(bisextile(2000)); // true (bissextile)
console.log(bisextile(1900)); // false (pas bissextile)
