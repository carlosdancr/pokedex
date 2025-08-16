const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () =>
  Array(150)
    .fill()
    .map((_, index) =>
      fetch(getPokemonUrl(index + 1)).then((response) => response.json())
    );

const generateHTML = (pokemons) =>
  pokemons.reduce((acc, { id, name, types, stats }) => {
    const elementTypes = types.map((typeInfo) => typeInfo.type.name);
    acc += `  
      <li class="pokedex__item ${elementTypes[0]}">
        <h2 class="pokemon__name">${id}. ${name}</h2>
        <div class="pokemon__types">
          ${
            elementTypes.length > 1
              ? `<p>${elementTypes[0]}</p> <p>${elementTypes[1]}</p>`
              : `<p>${elementTypes[0]}</p>`
          }
        </div>
        <img class="pokeball" src="./img/pokeball.svg" alt="Pokeball"/>
        <img class="pokemon__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png" alt="${name}">
        <div class="pokemon__stats">
          <h3>Base Stats</h3>
          <ul class="stats__list">
            <li>
              <span>HP</span>
              <span>${stats[0].base_stat}</span>
              <div class="bar">
                <div class="bar__progress" style="${
                  stats[0].base_stat >= 50
                    ? `background: #49D0B0; width: ${stats[0].base_stat}%`
                    : `background: #fc6c6d; width: ${stats[0].base_stat}%`
                }"></div>
              </div>
            </li>
            <li>
              <span>Attack</span>
              <span>${stats[1].base_stat}</span>
              <div class="bar">
              <div class="bar__progress" style="${
                stats[1].base_stat >= 50
                  ? `background: #49D0B0; width: ${stats[1].base_stat}%`
                  : `background: #fc6c6d; width: ${stats[1].base_stat}%`
              }"></div>
              </div>
            </li>
            <li>
              <span>Defense</span>
              <span>${stats[2].base_stat}</span>
              <div class="bar">
              <div class="bar__progress" style="${
                stats[2].base_stat >= 50
                  ? `background: #49D0B0; width: ${stats[2].base_stat}%`
                  : `background: #fc6c6d; width: ${stats[2].base_stat}%`
              }"></div>
              </div>
            </li>
            <li>
              <span>Sp.Atk</span>
              <span>${stats[3].base_stat}</span>
              <div class="bar">
              <div class="bar__progress" style="${
                stats[3].base_stat >= 50
                  ? `background: #49D0B0; width: ${stats[3].base_stat}%`
                  : `background: #fc6c6d; width: ${stats[3].base_stat}%`
              }"></div>
              </div>
            </li>
            <li>
              <span>Sp.Def</span>
              <span>${stats[4].base_stat}</span>
              <div class="bar">
              <div class="bar__progress" style="${
                stats[4].base_stat >= 50
                  ? `background: #49D0B0; width: ${stats[4].base_stat}%`
                  : `background: #fc6c6d; width: ${stats[4].base_stat}%`
              }"></div>
              </div>
            </li>
            <li>
              <span>Speed</span>
              <span>${stats[5].base_stat}</span>
              <div class="bar">
              <div class="bar__progress" style="${
                stats[5].base_stat >= 50
                  ? `background: #49D0B0; width: ${stats[5].base_stat}%`
                  : `background: #fc6c6d; width: ${stats[5].base_stat}%`
              }"></div>
              </div>
            </li>
          </ul>
        </div>
      </li>`;
    return acc;
  }, "");

const insertPokemonIntoPage = (pokemons) => {
  const ul = document.querySelector(".pokedex__list");
  ul.innerHTML = pokemons;
};

const pokemonPromises = generatePokemonPromises();
Promise.all(pokemonPromises).then(generateHTML).then(insertPokemonIntoPage);
