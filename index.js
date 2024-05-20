const form = document.querySelector("#form");
const input = document.querySelector("#pokemon-input");
const container = document.querySelector("#container");

const findPokemon = (e) => {
  e.preventDefault();

  const pokemonNumber = input.value.trim();

  if (pokemonNumber) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((response) => response.json())
      .then((data) => {
        renderPokemonCard(data);
      })
      .catch((error) => {
        container.innerHTML = `<p>Error! Ingrese nuevamente un número de Pokemon</p>`;
      });
  } else {
    container.innerHTML = `<p>Por favor, ingrese un número de Pokemon.</p>`;
  }
};

form.addEventListener("submit", findPokemon);

function renderPokemonCard(pokemon) {
  container.innerHTML = `
        <div class="pokemon-card">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Altura: ${pokemon.height / 10} m</p>
            <p>Peso: ${pokemon.weight / 10} kg</p>
            <p>Tipo: ${pokemon.types
              .map((type) => type.type.name)
              .join(", ")}</p>
        </div>
    `;
}
