function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//1. Crie um calendário dinamicamente
function createDaysOfTheMonth() {
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let ulDays = document.querySelector('#days')

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let liDay = document.createElement('li');
    
    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
      liDay.classList.add('day', 'holiday')
      ulDays.appendChild(liDay);
      liDay.innerText = decemberDaysList[index];
    } else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18) {
      liDay.classList.add('day', 'friday')
      ulDays.appendChild(liDay);
      liDay.innerText = decemberDaysList[index];
    } else if (decemberDaysList[index] === 25) {
      liDay.classList.add('day', 'friday', 'holiday')
      ulDays.appendChild(liDay);
      liDay.innerText = decemberDaysList[index];
    } else {
      liDay.classList.add('day')
      ulDays.appendChild(liDay);
      liDay.innerText = decemberDaysList[index];
    }
  }
}

createDaysOfTheMonth();


//2. Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
function createHolidayButton (buttonName) {
  let holidayBtn = document.createElement('button');
  let btnContainer = document.querySelector('.buttons-container');
  btnContainer.appendChild(holidayBtn);
  holidayBtn.id = 'btn-holiday';
  holidayBtn.innerText = buttonName
}

createHolidayButton('Feriados');


//3. Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday", quando clica no botão 'feriados.
let holidayBtn = document.querySelector('#btn-holiday');

function selectHoliday() {
  let arrayHoliday = document.querySelectorAll('.holiday')
  for (let index = 0; index < arrayHoliday.length; index += 1) {
    if (arrayHoliday[index].style.backgroundColor == 'rgb(238, 238, 238)') {
      arrayHoliday[index].style.backgroundColor = 'rgb(216,191,216)';
    } else {
      arrayHoliday[index].style.backgroundColor = 'rgb(238, 238, 238)';
    }
  }
}

holidayBtn.addEventListener('click', selectHoliday)


//4. Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
function createFridayButton (buttonName) {
  let btnContainer = document.querySelector('.buttons-container');
  let fridayBtn = document.createElement('button');
  btnContainer.appendChild(fridayBtn);
  fridayBtn.id = 'btn-friday'
  fridayBtn.innerText = buttonName
}

createFridayButton('Sexta-feira');


//5. Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
let fridayBtn = document.querySelector('#btn-friday');

function selectFriday() {
  let arrayFriday = document.querySelectorAll('.friday');
  let fridaysNumbers = [4, 11, 18, 25];
  for (let index = 0; index < arrayFriday.length; index += 1) {
    if (arrayFriday[index].innerText !== 'Sextou!') {
      arrayFriday[index].innerText = 'Sextou!';
    } else {
      arrayFriday[index].innerText = fridaysNumbers[index];
    }
  }
}

fridayBtn.addEventListener('click', selectFriday);


//6. 
let arrayDays = document.querySelectorAll('.day');
function zoomDayIn (event) {
  for (let index = 0; index < arrayDays.length; index += 1) {
    event.target.style.transform = 'scale(1.3)'
    event.target.style.color = 'rgb(78, 78, 78)'
  }
}

function zoomDayOut (event) {
  for (let index = 0; index < arrayDays.length; index += 1) {
    event.target.style.transform = 'unset'
    event.target.style.color = 'rgb(119, 119, 119)'
  }
}

for (let index = 0; index < arrayDays.length; index += 1) {
  arrayDays[index].addEventListener('mouseover', zoomDayIn);
}

for (let index = 0; index < arrayDays.length; index += 1) {
  arrayDays[index].addEventListener('mouseleave', zoomDayOut);
}


//7. Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

/* let taskInput = document.getElementById('task-input');
taskInput.addEventListener('input', function(event) {
  let taskDescription = event.target.value;
  return taskDescription;
}) */

let btnAddTask = document.getElementById('btn-add');
btnAddTask.addEventListener('click', function() {
  let taskInput = document.getElementById('task-input');
  if (taskInput.value === '') {
    alert('Favor peencher um novo compromisso.')
  } else {
    let divTasks = document.querySelector('.my-tasks');
    let newSpan = document.createElement('span');
    newSpan.innerText = taskInput.value;
    newSpan.style.display = 'block';
    divTasks.appendChild(newSpan);
    taskInput.value = '';
  }
})


//8. Implemente uma função que adicione uma legenda com cor para a tarefa. Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`. O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

