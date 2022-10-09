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

async function fetchPokemonAsyncAwait(pokemonNAme) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNAme}`);
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.log('Ops! Algo de errado não está certo...');
  }
};

async function requestPokemonListAsyncAwait() {
  const pokemonDataList = await Promise.all([
    fetchPokemonAsyncAwait('pikachu'),
    fetchPokemonAsyncAwait('charmander'),
    fetchPokemonAsyncAwait('squirtle'),
    fetchPokemonAsyncAwait('lapras'),
    fetchPokemonAsyncAwait('mewtwo'),
    fetchPokemonAsyncAwait('blastoise')
  ]);

  pokemonDataList.forEach((data) => {
    append(data);
  })
}

window.onload = requestPokemonListAsyncAwait;
