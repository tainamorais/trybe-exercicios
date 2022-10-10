const fetch = require('node-fetch');

const getUserUrl = (username) => `https://api.github.com/users/${username}`;

const buscaGitHub = async (username) => {
  try {
    const request = await fetch(getUserUrl(username));
    const response = await request.json();
    const { login, id, name, bio } = response;
    const infoUser = {
      name,
      id,
      login,
      bio,
    }
    // const { logradouro } = response;
    return infoUser;
    // return logradouro;
  } catch(error) {
    return error.message;
  }
}

buscaGitHub('tainamorais').then((data) => console.log(data));
// Poderia ser await, mas não sei como

module.exports = { getUserUrl, buscaGitHub };
