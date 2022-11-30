import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// 3º passo: Definição do estado inicial.
const INITIAL_STATE = {count: 0};

/*
2º passo: criar a função reducer, que recebe o state e action.
O Reducer, OBRIGATORIAMENTE, retorna o ESTADO.
Inserir o estado inicial, mas que precisa ser definido antes.
Definir a ação
*/
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "INCREMENT_COUNTER": return {
      ...state,
      count: state.count + 1,
    }
    case "DECREMENT_COUNTER": return {
      ...state,
      count: state.count - 1,
    }
    default: return state;
  }

  /*   if(action.type === "INCREMENT_COUNTER") {
    return { count: state.count + 1 }
  } else if (action.type === "DECREMENT_COUNTER") {
    return { count: state.count - 1 }
  }
  return state; */
};

/*
1º passo: criar a store e passar o reducer (função) como parâmetro.
*/
const store = createStore(reducer, composeWithDevTools());

/*
4º passo: configurar a ação de alterar estado.
*/
const actionAumentar = { type: "INCREMENT_COUNTER" };
const actionDiminuir = { type: "DECREMENT_COUNTER" };

// Fazer o disparo da ação
const incrementButton = document.getElementById('btn+');
incrementButton.addEventListener('click', () => {
  store.dispatch(actionAumentar);
})

const decrementButton = document.getElementById('btn-');
decrementButton.addEventListener('click', () => {
  store.dispatch(actionDiminuir);
})

/*
Ficar de olho na alteração do estado, sempre que o estado for alterado, ela vai avisar.
globalState pega o valor do estado atual. 
*/
store.subscribe(() => {
  // const globalState = store.getState();
  const {count} = store.getState();
  // console.log(globalState)
  const counterElement = document.querySelector('h2');
  counterElement.innerHTML = count;
});
