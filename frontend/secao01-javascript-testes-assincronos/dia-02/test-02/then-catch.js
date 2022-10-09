const fetch = require('node-fetch');

const getRandomAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';  // {"slip": { "id": 183, "advice": "Always get two ciders."}}
  const request = fetch(url)
    .then((response) => response.json())
    .then(({ slip: { id, advice } }) => console.log(advice))
    .catch((error) => console.log('Ops, algo de errado não está certo...', error.errno));
};

getRandomAdvice();


/* 
const getRandomAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';  // {"slip": { "id": 183, "advice": "Always get two ciders."}}
  const request = fetch(url)
    .then((response) => response.json())
    .then((object) => {
      const { slip } = object;
      const { id, advice } = slip;
      console.log(id, advice);
    });
};
*/
