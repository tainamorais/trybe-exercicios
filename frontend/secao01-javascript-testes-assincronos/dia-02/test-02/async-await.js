const fetch = require('node-fetch');

const getRandomAdvice = async () => {
  try {
    const url = 'https://api.adviceslip.com/advice';  // {"slip": { "id": 183, "advice": "Always get two ciders."}}
    const request = await fetch(url);
    const json = await request.json();
    const { slip: { id, advice } } = json;
    console.log(advice);
  } catch (err) {
    console.log('Life is better with cats!'); // Conselho padrão
  }
};

getRandomAdvice();