document.getElementById("filter-button").addEventListener("click", function() {
    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            let id = document.getElementById("id").value.trim();
            let name = document.getElementById("name").value.trim().toLowerCase();
            let type = document.getElementById("type").value;

            let filteredPokemons = data.filter(pokemon => {
                let pokemonName = pokemon.name && pokemon.name.french ? pokemon.name.french.toLowerCase() : "";

                // Traduire les types anglais en français
                let translatedTypes = pokemon.type.map(t => typeTranslation[t] || t);

                // Vérifier si le type correspond
                let typeMatch = !type || translatedTypes.includes(type);

                return (!id || pokemon.id.toString() === id) &&
                       (!name || pokemonName.includes(name)) &&
                       typeMatch;
            });

            displayResults(filteredPokemons);
        })
        .catch(error => console.error("Erreur Fetch :", error));
});


function displayResults(pokemons) {
    let resultList = document.getElementById("result-list");
    resultList.innerHTML = ""; // Vide la liste avant d'afficher les résultats

    if (pokemons.length === 0) {
        resultList.innerHTML = "<li>Aucun Pokémon trouvé.</li>";
        return;
    }

    pokemons.forEach(pokemon => {
        let listItem = document.createElement("li");
        listItem.textContent = `${pokemon.id} - ${pokemon.name.french} (${pokemon.type.join(", ")})`;
        resultList.appendChild(listItem);
    });
}

// Dictionnaire types (Anglais → Français)
const typeTranslation = {
    "Steel": "Acier",
    "Fighting": "Combat",
    "Dragon": "Dragon",
    "Water": "Eau",
    "Electric": "Électrik",
    "Fairy": "Fée",
    "Fire": "Feu",
    "Ice": "Glace",
    "Bug": "Insecte",
    "Normal": "Normal",
    "Grass": "Plante",
    "Poison": "Poison",
    "Psychic": "Psy",
    "Rock": "Roche",
    "Ground": "Sol",
    "Ghost": "Spectre",
    "Dark": "Ténèbres",
    "Flying": "Vol"
};
