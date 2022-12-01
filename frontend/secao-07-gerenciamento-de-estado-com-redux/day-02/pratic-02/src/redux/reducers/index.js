// Criar o estado inicial
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  theme: 'dark',
  name: 'Light',
};

//função que decide se vai atualizar ou não a store, que retona o state
// sempre recebe 2 coisas: estado e action
const themeReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case 'CHANGE_THEME':
    return {
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
      name: state.name === 'Dark' ? 'Light' : 'Dark',
    }
  default:
    return state;
 }
}

const rootReducer = combineReducers({ themeReducer })

export default rootReducer;