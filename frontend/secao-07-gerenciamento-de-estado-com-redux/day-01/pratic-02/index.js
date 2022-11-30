import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension"; 

const INITIAL_STATE = {
  theme: 'light',
  btnTheme: 'btnLight',
};

const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_BTN = 'CHANGE_BTN';

// Configuração da Redux Store
const reducer = (state = INITIAL_STATE, action) => {
  // Aqui vem a regra de negócio:
  // Se o estado anterior for light, então, retorna dark, e vice-versa.
  // console.log(state)

  switch(action.type) {
    case CHANGE_THEME: return {
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    }
    case CHANGE_BTN: return {
      ...state,
      btnTheme: state.btnTheme === 'btnLight' ? 'btnDark' : 'btnLight',
    }
    default: return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

// Me inscrever na loja de estados
store.subscribe(() => {
  // console.log('estado atualizado');
  const globalState = store.getState();
  const currentTheme = globalState.theme;
  // console.log(globalState);
  const body = document.querySelector('body');
  body.className = currentTheme;
})

store.subscribe(() => {
  const globalState = store.getState();
  const currentTheme = globalState.btnTheme;
  const button = document.querySelector('button');
  button.className = currentTheme;
})

// Disparo de eventos
const actionChangeTheme = () => {
  return {
    type: CHANGE_THEME
  };
}

const actionChangeBtnTheme = () => {
  return {
    type: CHANGE_BTN
  };
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
  store.dispatch(actionChangeTheme());
  store.dispatch(actionChangeBtnTheme());
  // console.log('aee!!')
})