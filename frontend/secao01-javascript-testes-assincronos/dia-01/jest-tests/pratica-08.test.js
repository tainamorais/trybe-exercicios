/* 
Complete a função handlePokemonSearch de modo que:

Ao chamar a função getPokemonDetails com um pokémon existente, imprime no console a mensagem com os detalhes deste pokémon.

Ao chamar a função getPokemonDetails com um pokémon não existente, imprime no console o erro.
*/

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) { // 1. Adicionamos o parâmetro `selectedPokemon`
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => {
  // Insira a callback de tratamento
  if (error) { // 2, 3. Criamos o `if/else` com o parâmetro `error`
    console.log(error); // 4. Colocamos o console.log() para imprimir o erro
  } else {
    console.log(message);// 5. Colocamos o console.log() para imprimir a mensagem
  }
};


// Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require('./get-pokemon-details');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :('); // 1. Criamos o erro esperado

    getPokemonDetails('Pikachu', (error, _message) => { // 2, 3. Chamamos a função passando os parâmetros
      try { // 4. Adiciona um `try/catch`
        expect(error).toEqual(expectedError); // 5. Criamos o expect
        done(); // 6. Chamamos a função `done()`
      } catch (error) {
        done(error); // 7. Chamamos a função `done()` com o parâmetro `error`
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => { // 8. Os mesmos processos do primeira `it` com seus ajustes
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
