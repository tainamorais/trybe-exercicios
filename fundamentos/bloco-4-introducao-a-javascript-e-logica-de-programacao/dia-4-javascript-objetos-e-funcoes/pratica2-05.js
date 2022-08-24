/*
Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/


//[1, 2, 3, 2, 5, 8, 2, 3];

function verificaNumeroMaisRepetido(arrayDeNumeros) {
  let contaRepeticoes = 0;
  let maiorRepeticoes = 0;
  let numeroMaisRepetido = 0;

  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    for (let i2 = 0; i2 < arrayDeNumeros.length; i2 += 1) {
      if (arrayDeNumeros[i] === arrayDeNumeros[i2]) {
        contaRepeticoes += 1;
      };
    };

    if (contaRepeticoes > maiorRepeticoes) {
      maiorRepeticoes = contaRepeticoes;
      numeroMaisRepetido = arrayDeNumeros[i];
    }

    contaRepeticoes = 0;

  };
  return numeroMaisRepetido;

};



console.log(verificaNumeroMaisRepetido([33, 44, 11, 11, 22, 33, 11, 77, 44, 44, 11]));
