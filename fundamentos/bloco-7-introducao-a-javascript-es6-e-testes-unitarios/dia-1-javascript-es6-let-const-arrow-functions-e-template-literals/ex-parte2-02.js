/* 
Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
*/

//longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

/* 
  for (let index = 0; index < arrayFrase.length; index += 1) {
    if (arrayFrase[index].length > maiorPalavra.length) {
      maiorPalavra = arrayFrase[index];
    }
  }
*/

//MINHA RESOLUÇÃO
const longestWord = frase => {
  const arrayPalavras = frase.split(' ');
  let maiorPalavra = arrayPalavras[0];
  for (let palavra of arrayPalavras) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

//RESOLUÇÃO GABARITO
const longestWord2 = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord2('Antonio foi ao banheiro e não sabemos o que aconteceu'));


// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
const longestWord3 = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));
