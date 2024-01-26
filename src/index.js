// imoport Carousel from "./js/carousel.js";
import { Carousel } from "./js/carousel.js";

const carousel = new Carousel(document.querySelector(".carousel"));
carousel.init();

const carousel_2 = new Carousel(document.querySelector(".carousel_2"));
carousel_2.init();

/*************
 * FRONTEND 58
 ************/

const url = "https://pokeapi.co/api/v2/pokemon";

async function getPokemons(url) {
  const data = await fetch(url /*options*/);
  const res = await data.json();
  // Invoke a function that will receive the pokemons array
  // and will append them on a DOM element
  createPokemonGrid(res.results, "pokemons");
}

getPokemons(url);

const createPokemonGrid = (pokemonData, containerId) => {
  // Get the container element
  const container = document.getElementById(containerId);
  // Check if the container exists (! --> NOT)
  if (!container) {
    console.error("Element with that id does not exist");
    return;
  }
  // Create a grid container and attach appropriate css class
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("pokemon-grid");
  // Check whether pokemonData is Array
  if (!Array.isArray(pokemonData)) {
    console.error("The data is not an array!");
    return;
  }
  // Iterate over each Pokemon data and create a grid item
  pokemonData.forEach((pokemon) => {
    // Create item element for every pokemon
    const item = document.createElement("div");
    item.classList.add("pokemon-item");
    // Create a link for each Pokemon
    const link = document.createElement("a"); // <a href=""></a>
    link.href = pokemon.url;
    link.text = pokemon.name;
    // Append the link to the grid item <div id="gridContainer"><div><a href=""></a></div> <div><a href=""></a></div> <div><a href=""></a></div> ... </div>
    item.append(link);
    // Append the grid item to the grid container
    gridContainer.append(item);
  });

  // Append the grid container to the specified container
  container.append(gridContainer);
};
