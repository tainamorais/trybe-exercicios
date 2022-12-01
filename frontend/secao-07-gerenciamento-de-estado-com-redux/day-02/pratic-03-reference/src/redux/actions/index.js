// Action não é necessária para configuração inicial do Redux

// ACTIONS TYPES
export const USER_INFORMATION = 'USER_INFORMATION';
export const USER_PREFERENCES = 'USER_PREFERENCES';

// ACTIONS CREATORS
export const userInformationAction = (payload) => ({
  type: USER_INFORMATION, // como um id, que diferencia as actions
  payload, // valor que quer salvar no estado global, pode ser payload ou qualquer coisa
});

// payload não tem : pois é o mesmo valor que receberá do parâmetro

// depois da action criada, colocar no reducer, de onde sairá toda a lógica

export const userPreferencesAction = (payload) => ({
  type: USER_PREFERENCES, // como um id, que diferencia as actions
  payload, // valor que quer salvar no estado global, pode ser payload ou qualquer coisa
});