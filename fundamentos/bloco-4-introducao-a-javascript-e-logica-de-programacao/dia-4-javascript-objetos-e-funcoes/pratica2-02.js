/*
Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/

function indiceMaiorValorEmArray(arrayDeInteiros) {
  let maiorValor = arrayDeInteiros[0];

  for (let i = 0; i < arrayDeInteiros.length; i += 1) {
    if (arrayDeInteiros[i] > maiorValor) {
      maiorValor = arrayDeInteiros[i];
    }
  };

  let indiceMaiorValor = arrayDeInteiros.indexOf(maiorValor);
  return indiceMaiorValor;
};



console.log(indiceMaiorValorEmArray([2, 3, 6, 7, 10, 1]));
