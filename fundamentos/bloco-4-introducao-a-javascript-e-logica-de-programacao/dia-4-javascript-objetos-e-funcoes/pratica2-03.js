/*
Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
*/

function indiceMenorValorEmArray(arrayDeInteiros) {
  let menorValor = arrayDeInteiros[0];

  for (let i = 0; i < arrayDeInteiros.length; i += 1) {
    if (arrayDeInteiros[i] < menorValor) {
      menorValor = arrayDeInteiros[i];
    }
  };

  let indiceMenorValor = arrayDeInteiros.indexOf(menorValor);
  return indiceMenorValor;
};



console.log(indiceMenorValorEmArray([2, 4, 6, 7, 10, 0, -3]));
