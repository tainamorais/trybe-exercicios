//Parte 1

//1. Acesse o elemento elementoOndeVoceEsta.
let elemento1 = document.querySelector('#elementoOndeVoceEsta');

//2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let paiElemento1 = elemento1.parentElement;
paiElemento1.style.backgroundColor = 'yellow';

//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let elemento2 = document.querySelector('#primeiroFilhoDoFilho');
elemento2.innerText = 'Texto do primeiroFilhoDoFilho'

//4. Acesse o primeiroFilho a partir de pai.
let elemento3 = document.querySelector('#pai').firstElementChild

//5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let elemento31 = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

//6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let elemento4 = document.querySelector('#elementoOndeVoceEsta').nextSibling 

//7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let elemento5 = document.querySelector('#elementoOndeVoceEsta'.nextElementSibling )

//8. Agora acesse o terceiroFilho a partir de pai.
let elemento6 = document.querySelector('#pai').lastElementChild.previousElementSibling;



//Parte 2

//1. Crie um irmão para elementoOndeVoceEsta. Adicionei uma classe só para ver mais claramente na inspeção.
let paiElementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta').parentElement;
let novoIrmaoElementoOndeVoceEsta = document.createElement('section');
novoIrmaoElementoOndeVoceEsta.className = 'newSection'
paiElementoOndeVoceEsta.appendChild(novoIrmaoElementoOndeVoceEsta);

//2. Crie um filho para elementoOndeVoceEsta. Criei um parágrafo.
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('p');
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta)

//3. Crie um filho para primeiroFilhoDoFilho. Criei um h3.
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho = document.createElement('h3');
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho)

//4. A partir desse filho criado, acesse terceiroFilho. Acessei e criei um h6 para visualizar melhor.
let terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling
let newElementTest = document.createElement('h6');
terceiroFilho.appendChild(newElementTest)


//Parte 3
//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

//1º passo: Recupere o elemento com o id pai
let oPai = document.getElementById('pai');

//2º passo: Utilize o .childNodes para retornar uma coleção viva de nós filhos do elemento pai.
let filhosDoOPai = oPai.childNodes;

for (let index = filhosDoOPai.length - 1; index >= 0; index -= 1) {
  const filhoAtual = filhosDoOPai[index];
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}


const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
    segundoEUltimoFilhoDoFilho.remove(); // Remove o segundo filho do filho