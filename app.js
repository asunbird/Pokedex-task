// Create an array of objects where you store all your pokemons. 
// Each pokemon should have the following properties: thumbnail(the path to the pokemon´s image), id, name, and type.

// 1. Array of Pokémon objects
let pokemonsArr = [
    { thumbnail: "./media/001.png", id: 1, name: "Bulbasaur", type: ["Grass", "Poison"] },
    { thumbnail: "./media/002.png", id: 2, name: "Charmander", type: ["Fire"] },
    { thumbnail: "./media/003.png", id: 3, name: "Caterpie", type: ["Bug"] },
    { thumbnail: "./media/004.png", id: 4, name: "Kakuna", type: ["Bug", "Poison"] },
    { thumbnail: "./media/005.png", id: 5, name: "Rattata", type: ["Normal"] },
    { thumbnail: "./media/006.png", id: 6, name: "Pikachu", type: ["Electric"] },
    { thumbnail: "./media/007.png", id: 7, name: "Vulpix", type: ["Fire"] },
    { thumbnail: "./media/008.png", id: 8, name: "Jigglypuff", type: ["Normal", "Fairy"] },          
    { thumbnail: "./media/009.png", id: 9, name: "Diglett", type: ["Ground"] },
    { thumbnail: "./media/010.png", id: 10, name: "Meowth", type: ["Normal"] },
    { thumbnail: "./media/011.png", id: 11, name: "Tentacruel", type: ["Water", "Poison"] },
    { thumbnail: "./media/012.png", id: 12, name: "Ponyta", type: ["Fire"] },
    { thumbnail: "./media/013.png", id: 13, name: "Cloyster", type: ["Water", "Ice"] },
    { thumbnail: "./media/014.png", id: 14, name: "Cubone", type: ["Ground"] },
    { thumbnail: "./media/015.png", id: 15, name: "Eevee", type: ["Normal"] },
    { thumbnail: "./media/016.png", id: 16, name: "Porygon", type: ["Normal"] },  

];

// 2. Select the DOM container
// Before JavaScript can build anything on the screen, it needs to know where to put it.
// document.querySelector searches HTML document for the first element that has the class cards-container (likely a <ul> or <div>)
const cardsContainer = document.querySelector(".cards-container");


// 3. Loop through the array and create HTML elements for each Pokémon
// The forEach method takes your array and says, "For every single Pokémon in this list, run the following set of instructions." 
// The variable pokemon represents the current Pokémon being worked on.
pokemonsArr.forEach(pokemon => {
    // Format the ID so it always shows 4 digits (e.g., 1 becomes 0001)
    // This converts the ID number into a string and ensures it is always 4 characters long by adding zeroes to the front. 
    // So, 1 becomes "0001", and 25 becomes "0025".
    const formattedId = pokemon.id.toString().padStart(4, '0');
    pokemon.id = formattedId;

    // Create a card element with the class "card" to hold the Pokémon's information.
    // document.createElement("...") is generating a brand new HTML tag in its memory. 
    // It creates a list item (<li>), an image (<img>), and some dividers (<div>).
    const card = document.createElement("li");
    // Once an element is created, JavaScript adds CSS classes to it (e.g., card.classList.add("card")) 
    // so your stylesheet can make it look good.
    card.classList.add("card");

    // Create an image element for the thumbnail with the class "cardimg". 
    // Set its source to the thumbnail path and alt text to the Pokémon's name.
    const img = document.createElement("img");
    img.classList.add("cardimg");
    // assigns the specific data from your array to the elements. 
    // For example, it sets the image's source (img.src = pokemon.thumbnail)
    img.src = pokemon.thumbnail;
    img.alt = pokemon.name;
    img.loading = "lazy";

    // Create a div for the Pokémon information with the class "cardinf".
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("cardinf");

    // Create a span for the Pokémon index inside a div with the class "pokemon-index", showing the label "Index" and the formatted ID.
    const pokemonIndex = document.createElement("div"); 
    // when an element is created, JavaScript adds CSS class to it
    pokemonIndex.classList.add("pokemon-index");
    // assigns the specific data from your array to the elements and fills the text areas using .innerHTML.
    pokemonIndex.innerHTML = `<span>#</span><span>${pokemon.id}</span>`;

    // Create a div for the Pokémon name with the class "pokemon-name", showing the Pokémon's name.
    const pokemonName = document.createElement("div");
    pokemonName.classList.add("pokemon-name");
    pokemonName.innerHTML = `<div>${pokemon.name}</div>`;

    // Create a div for the Pokémon type with the class "pokemon-type", showing the Pokémon's type(s) joined by a comma.
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

    // Loop through each type in the pokemon.type array
    pokemon.type.forEach(type => {
        const typeSpan = document.createElement('span'); // Create a new span
        typeSpan.textContent = type; // Set its text to the type name
        typeSpan.classList.add("type"); // Add a class for styling

        // Set the background color for every type, regardless of how many there are
        typeSpan.style.backgroundColor = typeColorArr.find(t => t.type === type)?.color || "#878787";
        
        pokemonType.appendChild(typeSpan); // Add it to the pokemon-type container
    });
    

    // Creating the elements doesn't automatically put them on the screen or connect them. appendChild is the glue.
    // First, it glues the index and the name/type inside the cardInfo container.

    // Append the index and name/type to the card info
    cardInfo.appendChild(pokemonIndex);
    cardInfo.appendChild(pokemonName);
    cardInfo.appendChild(pokemonType);

    // Then, it glues the image and the cardInfo container inside the main card.
    // Append the image and card info to the card
    card.appendChild(img);
    card.appendChild(cardInfo);

    // Finally, it takes the fully assembled card and glues it into the cardsContainer that we found at the very beginning.
    // Append the card to the container
    cardsContainer.appendChild(card);
});

//      