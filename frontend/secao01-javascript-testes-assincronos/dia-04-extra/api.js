// const fetch = require('node-fetch');

/*
API do projeto:
https://exchangerate.host/#/docs
https://api.exchangerate.host/latest?base=GBP
https://api.exchangerate.host/latest?base=BRL&symbols=USD,EUR,GBP
*/

const BASE_URL = 'https://api.exchangerate.host/';
const LATEST_ENDPOINT = '/latest';

// construir url baseada na moeda
const buildUrlBasedOnCurrency = (currency) => {
  return `${BASE_URL}${LATEST_ENDPOINT}/?base=${currency}`;
}

// função que recupera moeda
const fetchCurrency = async (currency) => {
  const endpoint = buildUrlBasedOnCurrency(currency);

  try {
    // fetch retorna uma promessa, que pode ser bem sucedida ou não
    const response = await fetch(endpoint);
    const object = await response.json();
    return object;
  } catch (error) {
    console.log(error);
  }

  /*
  const promise = fetch(endpoint).then((response) => {
    response.json().then((object) => {
      console.log(object);
    });
  }).catch((error) => {
    console.log(error)
  });
 */  

};

// fetchCurrency('BRL').then((obj) => console.log(obj));

/* 
window.onload = async () => {
  const object = await fetchCurrency('BRL');
}
 */
