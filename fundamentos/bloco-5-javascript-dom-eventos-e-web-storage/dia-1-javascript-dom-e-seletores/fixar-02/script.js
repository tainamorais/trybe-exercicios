const h1 = document.querySelectorAll('h1');
h1[0].style.backgroundColor = '#3CB371';

const secaoEmergency = document.querySelector('.emergency-tasks');
secaoEmergency.style.backgroundColor = '#FFA07A';

const emergency = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergency.length; i += 1) {
  emergency[i].style.backgroundColor = '#BA55D3';
};

const secaoNotEmergency = document.querySelector('.no-emergency-tasks');
secaoNotEmergency.style.backgroundColor = '#DAA520';

const notEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let value of notEmergency) {
  value.style.backgroundColor = '#1C1C1C';
};

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = '#2F4F4F';
