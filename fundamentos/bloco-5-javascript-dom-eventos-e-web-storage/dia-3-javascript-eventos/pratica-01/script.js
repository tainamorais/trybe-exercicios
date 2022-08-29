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

