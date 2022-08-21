/* 
2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
*/

let word = 'tryber';

let wordContraria = '';

for (let i = 0; i < word.length; i +=1) {
  wordContraria += word[word.length - 1 - i];
};

console.log(wordContraria);




// Minha resolução

let newWordContraria = word.split('').reverse().join('')
console.log(newWordContraria);


/* 
Estágios etapa por etapa
let arrayWord = word.split('');
let arrayWordContraria = arrayWord.reverse();
let newWordContraria = arrayWordContraria.join('');
*/