/*
Deste jeito não está encadeado, as requisições podem vir em qualquer ordem.
O async e await lida com isso.
*/

function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.sprites.front_default;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
};

function fetchPokemon(pokemonNAme) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNAme}`)
    .then((response) => response.json()
    .then((pokemon) => append(pokemon)))
    .catch(() => console.log('Algo de errado não está certo...'));
};

function requestPokemonList() {
  fetchPokemon('pikachu');
  fetchPokemon('charmander');
  fetchPokemon('squirtle');
  fetchPokemon('lapras');
  fetchPokemon('mewtwo');
  fetchPokemon('blastoise');
}

window.onload = requestPokemonList;
