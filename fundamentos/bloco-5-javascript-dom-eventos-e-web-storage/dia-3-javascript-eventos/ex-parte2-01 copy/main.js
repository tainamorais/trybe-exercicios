// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
let firstLi = document.querySelector('#first-li');
let secondLi = document.querySelector('#second-li');
let thirdLi = document.querySelector('#third-li');
let campoInput = document.querySelector('#input')

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function trocaClasseTech(evento) {
const techElement = document.querySelector('.tech');
//techElement.classList.remove('tech');
//evento.target.classList.add('tech')
techElement.classList.toggle('tech');
evento.target.classList.toggle('tech');
input.value = '';
}

firstLi.addEventListener('click', trocaClasseTech);
secondLi.addEventListener('click', trocaClasseTech);
thirdLi.addEventListener('click', trocaClasseTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
  const techActived = document.querySelector('.tech');
  techActived.innerText = input.value //ou event.target.value
})


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
const top3 = document.querySelector('#my-spotrybefy');
function goToMyTop3() {
  window.location.replace('https://github.com/tainamorais');
}
top3.addEventListener('dblclick', goToMyTop3)


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

top3.addEventListener('mouseover', function(changeColorTop3) {
  top3.style.color = 'yellow'
})

top3.addEventListener('mouseleave', function(unChangeColorTop3) {
  top3.style.color = 'unset'
})


//Outra forma de fazer o número 5, no final, só fazer o addEventListener e atribuir a função.
/* 
function changeColorTop3() {
  top3.style.color = 'yellow'
}

function unChangeColorTop3() {
  top3.style.color = 'unset'
}

 */