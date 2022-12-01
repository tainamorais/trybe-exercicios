import { combineReducers } from 'redux';
import formReducer from './formReducer';

// Arquivo que combina os reducers. Fazer isso sempre, ainda que tenha apenas um reducer.

/*
const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   default:
    return state;
 }
}
*/

const rootReducer = combineReducers({ formReducer })

export default rootReducer;