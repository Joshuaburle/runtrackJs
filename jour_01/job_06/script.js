function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // Multiple de 3 et 5
        } else if (i % 3 === 0) {
            console.log("Fizz"); // Multiple de 3
        } else if (i % 5 === 0) {
            console.log("Buzz"); // Multiple de 5
        } else {
            console.log(i); // Sinon, affiche le nombre
        }
    }
}

// Exécuter la fonction
fizzbuzz();
