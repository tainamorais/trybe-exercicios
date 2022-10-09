const { consultaCep } = require('./consultaCep');

test('Verifica se retorna o logradouro', async () => {
  expect(await consultaCep('20550140')).toBe('Rua Visconde de Itamarati'); //toEqual tb poderia segundo course
})
