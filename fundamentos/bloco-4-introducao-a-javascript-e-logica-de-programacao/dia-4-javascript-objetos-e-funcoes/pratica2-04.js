/*
Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.
*/


//['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function verificaMaiorNome(arrayDeNomes) {
  let maiorNome = arrayDeNomes[0];

  for (let i = 0; i < arrayDeNomes.length; i += 1) {
    if (arrayDeNomes[i].length > maiorNome.length) {
      maiorNome = arrayDeNomes[i];
    };
  };
  return maiorNome;
};



console.log(verificaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
