// Create an array of objects where you store all your pokemons. 
// Each pokemon should have the following properties: thumbnail(the path to the pokemon´s image), id, name, and type.

// ... 1. Array of Pokémon objects: ...
// level: I set them all to start at Level 5 so they are on equal footing.
// expToNextLevel: I set this to 100 as a simple, flat placeholder for battle script.
// evolutionLevel: I added the correct levels. For Pokémon that evolve using an item (like Pikachu or Vulpix) 
// or are already fully evolved (like Tentacruel or Cloyster), I set this value to 'null'. 
// script can eventually check if this is 'null' to know if it should skip the level-up evolution check.
let pokemonsArr = [
    { thumbnail: "./media/001.png", id: 1, name: "Bulbasaur", type: ["Grass", "Poison"], level: 5, maxHp: 45, attackPower: 49, defensePower: 49, speed: 45, expToNextLevel: 100, evolutionLevel: 16 },
    { thumbnail: "./media/002.png", id: 2, name: "Charmander", type: ["Fire"], level: 5, maxHp: 39, attackPower: 52, defensePower: 43, speed: 65, expToNextLevel: 100, evolutionLevel: 16 },
    { thumbnail: "./media/003.png", id: 3, name: "Caterpie", type: ["Bug"], level: 5, maxHp: 45, attackPower: 30, defensePower: 35, speed: 45, expToNextLevel: 100, evolutionLevel: 7 },
    { thumbnail: "./media/004.png", id: 4, name: "Kakuna", type: ["Bug", "Poison"], level: 5, maxHp: 45, attackPower: 25, defensePower: 50, speed: 35, expToNextLevel: 100, evolutionLevel: 10 },
    { thumbnail: "./media/005.png", id: 5, name: "Rattata", type: ["Normal"], level: 5, maxHp: 30, attackPower: 56, defensePower: 35, speed: 72, expToNextLevel: 100, evolutionLevel: 20 },
    { thumbnail: "./media/006.png", id: 6, name: "Pikachu", type: ["Electric"], level: 5, maxHp: 35, attackPower: 55, defensePower: 40, speed: 90, expToNextLevel: 100, evolutionLevel: null },
    { thumbnail: "./media/007.png", id: 7, name: "Vulpix", type: ["Fire"], level: 5, maxHp: 38, attackPower: 41, defensePower: 40, speed: 65, expToNextLevel: 100, evolutionLevel: null },
    { thumbnail: "./media/008.png", id: 8, name: "Jigglypuff", type: ["Normal", "Fairy"], level: 5, maxHp: 115, attackPower: 45, defensePower: 20, speed: 20, expToNextLevel: 100, evolutionLevel: null },
    { thumbnail: "./media/009.png", id: 9, name: "Diglett", type: ["Ground"], level: 5, maxHp: 10, attackPower: 55, defensePower: 25, speed: 95, expToNextLevel: 100, evolutionLevel: 26 },
    { thumbnail: "./media/010.png", id: 10, name: "Meowth", type: ["Normal"], level: 5, maxHp: 40, attackPower: 45, defensePower: 35, speed: 90, expToNextLevel: 100, evolutionLevel: 28 },
    { thumbnail: "./media/011.png", id: 11, name: "Tentacruel", type: ["Water", "Poison"], level: 5, maxHp: 80, attackPower: 70, defensePower: 65, speed: 100, expToNextLevel: 100, evolutionLevel: null },
    { thumbnail: "./media/012.png", id: 12, name: "Ponyta", type: ["Fire"], level: 5, maxHp: 50, attackPower: 85, defensePower: 55, speed: 90, expToNextLevel: 100, evolutionLevel: 40 },
    { thumbnail: "./media/013.png", id: 13, name: "Cloyster", type: ["Water", "Ice"], level: 5, maxHp: 50, attackPower: 95, defensePower: 180, speed: 70, expToNextLevel: 100, evolutionLevel: null },
    { thumbnail: "./media/014.png", id: 14, name: "Cubone", type: ["Ground"], level: 5, maxHp: 50, attackPower: 50, defensePower: 95, speed: 35, expToNextLevel: 100, evolutionLevel: 28 },
    { thumbnail: "./media/015.png", id: 15, name: "Eevee", type: ["Normal"], level: 5, maxHp: 55, attackPower: 55, defensePower: 50, speed: 55, expToNextLevel: 100, evolutionLevel: null },
    { thumbnail: "./media/016.png", id: 16, name: "Porygon", type: ["Normal"], level: 5, maxHp: 65, attackPower: 60, defensePower: 70, speed: 40, expToNextLevel: 100, evolutionLevel: null }
];

// ... 2. Select the DOM container: ...
// Before JavaScript can build anything on the screen, it needs to know where to put it.
// document.querySelector searches HTML document for the first element that has the class cards-container (likely a <ul> or <div>)
const cardsContainer = document.querySelector(".cards-container");

// ... 3. Loop through the array and create HTML elements for each Pokémon: ...
// The forEach method takes array and says: "For every single Pokémon in this list, run the following set of instructions." 
// The variable pokemon represents the current Pokémon being worked on.
pokemonsArr.forEach(pokemon => {
    // Format the ID number into a string and ensures it is always 4 characters long by adding zeroes to the front. 
    // So, 1 becomes "0001", and 25 becomes "0025".
    const formattedId = pokemon.id.toString().padStart(4, '0');
    pokemon.id = formattedId;

    // Create a card element - a list item (<li>) with the class "card" to hold the Pokémon's information.
    // document.createElement("...") is generating a brand new HTML tag in its memory. 
    const card = document.createElement("li");
    // Once an element is created, JavaScript adds CSS classes to it (e.g., card.classList.add("card")) to style it with CSS.
    card.classList.add("card");

    // Create an image element (<img>) for the thumbnail with the class "cardimg". 
    // its source path in the thumbnail parameter of array object and alt text to the Pokémon's name.
    const img = document.createElement("img");
    img.classList.add("cardimg");
    // assigns the specific data from your array to the elements. 
    // For example, it sets the image's source (img.src = pokemon.thumbnail)
    img.src = pokemon.thumbnail;
    img.alt = pokemon.name;
    img.loading = "lazy";

    // Create a (<div>) for the Pokémon information with the class "cardinf".
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("cardinf");

    // Create a span for the Pokémon "Index" and the formatted ID inside a div with the class "pokemon-index"
    const pokemonIndex = document.createElement("div"); 
    pokemonIndex.classList.add("pokemon-index");
    // assigns the specific data from your array to the element and fill the text areas using .innerHTML
    pokemonIndex.innerHTML = `<span>#</span><span>${pokemon.id}</span>`;

    // Create a div for the Pokémon name with the class "pokemon-name", assigns data from array.
    const pokemonName = document.createElement("div");
    pokemonName.classList.add("pokemon-name");
    pokemonName.innerHTML = `<div>${pokemon.name}</div>`;

    // Create a div for the Pokémon type with the class "pokemon-type"
    const pokemonType = document.createElement("div");
    pokemonType.classList.add("pokemon-type");
    // Define an array of type-color pairs to determine the color based on the Pokémon's type.
    let typeColorArr = [
        {type: "Grass", color: "#89dd65"}, 
        {type: "Poison", color: "#a33ea1"},
        {type: "Fire", color: "#f08030"},
        {type: "Bug", color: "#587c14"},
        {type: "Normal", color: "#949393"},
        {type: "Electric", color: "#ebdb2a"},
        {type: "Fairy", color: "#f59dc3"},
        {type: "Ground", color: "#b59543"},
        {type: "Water", color: "#368ecd"},
        {type: "Ice", color: "#82dde2"},
        {type: "Fighting", color: "#953b1b"},
        {type: "Rock", color: "#a08b23"},
        {type: "Psychic", color: "#ef43ad"},
        {type: "Ghost", color: "#5a3f90"},
        {type: "Dragon", color: "#f15816"},
        {type: "Dark", color: "#3e3027"},
        {type: "Steel", color: "#a0a6a5"},
        {type: "Flying", color: "#569bae"}
    ];
    // loop through the pokemon.type array to create a span for each type.
    pokemon.type.forEach(type => {
        const typeSpan = document.createElement('span'); // Create a new span
        typeSpan.textContent = type; // Set its text from the type name
        typeSpan.classList.add("type"); // Add a class for styling

        // Set the background color for every type, regardless of how many there are types. 
        // It looks up the color in the typeColorArr based on the type name. If it doesn't find a match, it defaults to gray.
        typeSpan.style.backgroundColor = typeColorArr.find(t => t.type === type)?.color || "#878787";
        
        pokemonType.appendChild(typeSpan); // Add it to the pokemon-type container to order them in a row. 
        // If there are multiple types, they will be displayed side by side.
    });
    

    // Creating the elements doesn't automatically put them on the screen or connect them. appendChild is the glue.
    // First, it glues the index and the name inside the cardInfo container.
    cardInfo.appendChild(pokemonIndex);
    cardInfo.appendChild(pokemonName);
    

    // Create a div for the card's inner content with the class "card-inner" to hold the image and card info.
    // This is an additional wrapper that can be used for CARD REVERSE Animation.
    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");
    card.appendChild(cardInner);

    // Create a div containers for CARD FRONT and CARD BACK information (for CARD REVERSE Animation).
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardInner.appendChild(cardFront);

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardInner.appendChild(cardBack);

    // ... 4. The Card Front Content: ...
    // Append the image and card info to the card inner FRONT container
    cardFront.appendChild(img);
    cardFront.appendChild(cardInfo);

    // Create buttons container for the front side of the card (extension: for battle and flip) and append it to the card front.
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("front-buttons");
    cardInfo.appendChild(buttonsContainer);


    // Create a button for flipping the card (on the front side)
    const flipButton = document.createElement("button");
    flipButton.textContent = "Profile";
    buttonsContainer.appendChild(flipButton);

    // Create a button for battling (extension: for battle) on the front side
    const battleButton = document.createElement("button");
    battleButton.textContent = "Battle!";
    buttonsContainer.appendChild(battleButton);

    // ... 5. The Card Back Content: ...
    // The CARD BACK can be used for additional information when the card is flipped.
    const backContent = document.createElement("div");
    backContent.classList.add("back-content");
    backContent.innerHTML = `<p>Additional information</p>`;
    cardBack.appendChild(backContent);

    cardBack.appendChild(pokemonType);
 
    // Container for Back Button and Name (on the back side)
    const backButtonNameContainer = document.createElement("div");
    backButtonNameContainer.classList.add("back-button-name");
    cardBack.appendChild(backButtonNameContainer);

    const pokemonTitle = document.createElement("h2");
    pokemonTitle.textContent = pokemon.name;
    backButtonNameContainer.appendChild(pokemonTitle);

    // Create a button for flipping-back the card (on the back side)
    const flipBackButton = document.createElement("button");
    flipBackButton.textContent = "Pokémon";
    backButtonNameContainer.appendChild(flipBackButton);



    // the fully assembled card appends to the cardsContainer.
    cardsContainer.appendChild(card);

    // After all the elements are created add the Pokémon's ID to the card li element
    card.id = formattedId;
});

// Add event listeners for card flip    
const cards = document.querySelectorAll(".card-inner");

function flipCard() {
    // If the card is already flipped, remove the flip class to flip it back.
    if (this.classList.contains("flip")) {
        this.classList.remove("flip"); 
    } else {
        // If the card is not flipped, add the flip class to flip it.
        this.classList.toggle("flip");
        // After 8 seconds, remove the flip class to flip the card back automatically.
        setTimeout(() => {
            this.classList.remove("flip");
        }, 8000);
    }
}

cards.forEach((card) => card.addEventListener("click", flipCard)); 
// When a card is clicked, it toggles the "flip" class on the card's inner container, 
// which triggers the CSS animation to flip the card and show the back side.


// ...... Simple JS Battle Logic ......
// With just the core stats (name, level, maxHp, currentHp, attackPower, defensePower, speed) 
// we can create a very basic battle system.

// 1. Check Speed: The script compares PokemonA.speed vs PokemonB.speed. The higher number goes first.

// 2. Attack Phase: The attacking Pokemon calculates damage using a simple formula
    //Calculate Damage: A simple math formula determines the hit. For example: 
    // Damage = PokemonA.attackPower - PokemonB.defensePower 
    // (you can add a minimum damage of 1 so they don't do zero damage).


// 3. Deduct Health: PokemonB.currentHp -= Damage.

// 4. Check for Faint: If PokemonB.currentHp <= 0, then PokemonB faints and the battle ends.
    // Check for Winner: If PokemonB.currentHp drops to 0 or below, Pokemon A wins. If not, Pokemon B attacks back.
    // 5. If PokemonB is still alive, it becomes PokemonA's turn to attack, and the process repeats until one Pokemon faints.


// 5. After a battle user can see a winner Pokemon's card (extension: and it is updated).


// ......... This is for extension: .................
// You can add more complexity by including type advantages (e.g., Water beats Fire), critical hits, or special moves that have different effects.
// Level Up and Evolution: After winning a battle, the victorious Pokemon gains experience points (XP). 
// When it reaches the required XP threshold (expToNextLevel), it levels up, which can increase its stats. 
// If it reaches the evolution level (evolutionLevel), it evolves into its next form, which can further boost its stats and change its appearance.