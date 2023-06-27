let button = document.querySelector("#searchButton");
let pokemonName = document.querySelector("#pokemonName");
let pokemonImage = document.querySelector("#pokemonImage");

button.addEventListener('click', async () => {
  let textInput = document.querySelector("#inputBar").value;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput.toLowerCase()}`);
    const pokemonData = response.data;

    // Clear previous search result
    pokemonName.textContent = "";
    pokemonImage.src = "";

    pokemonName.textContent = pokemonData.name;
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonImage.style.display = "block"; // Display the image
  } catch (error) {
    if (error.response && error.response.status === 404) {
      pokemonName.textContent = "No such Pokemon";
      pokemonImage.src = "";
      pokemonImage.style.display = "none";
    } else {
      console.log(error);
    }
  }
});
