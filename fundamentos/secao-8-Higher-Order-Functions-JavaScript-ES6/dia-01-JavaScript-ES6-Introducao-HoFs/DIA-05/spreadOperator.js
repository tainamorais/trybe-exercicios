//SPREAD OPERATOR COM ARRAY
const nomes1 = ['Tainá', 'Cida']
const nomes2 = ['Luana', 'Fernanda', 'Anderson']
const nomes3 = ['Maurilio', 'Lenice']

const familia = [...nomes1, ...nomes2, ...nomes3, 'Ubiratan']

console.log(familia)



//SPREAD OPERATOR COM OBJETOS

const pessoa = {
  nome: 'Tainá',
  idade: 39,
  cidade: 'RJ'
}

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: false
}

const pessoaTrybe = {
  ...pessoa,
  ...conhecimentosTrybe,
  hobbie: 'videogame'
}

console.log(pessoaTrybe)




// SPREAD COMO PARÂMETRO - Automaticamente ele pega apenas os primeiros itens do array que garantes a quantidade de parâmetros
const imprimeFamilia = (membro1, membro2, membro3) => `Três dos membros são: ${membro1}, ${membro2} e ${membro3}.`

console.log(imprimeFamilia(...familia))




// OUTRO EXEMPLO

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.63];

console.log(imc(...patientInfo)); // 20.76





// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'manga', 'uva', 'laranja', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva passa', 'sorvete', 'castanha'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
