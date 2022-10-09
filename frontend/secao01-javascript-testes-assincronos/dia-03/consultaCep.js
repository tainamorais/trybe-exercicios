const fetch = require('node-fetch');

const consultaCep = async (cep) => {
  try {
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const response = await request.json();
    const { logradouro } = response;
    // console.log(logradouro);
    return logradouro;
  } catch(error) {
    return error.message;
  }
}

// consultaCep('20550140');

module.exports = { consultaCep };
