const { buscaGitHub } = require('./buscaGitHub');

describe('Quando chamada, a função buscaGitHub...', () => {
  it('deve retornar um objeto contendo name, id, login e bio', async () => {
    expect.assertions(1);

    const expectedValue = {
      name: 'Tainá Morais',
      id: 98855158,
      login: 'tainamorais',
      bio: 'Web Developer'
    }

    const result = await buscaGitHub('tainamorais');

    expect(result).toEqual(expectedValue);
  });
});
