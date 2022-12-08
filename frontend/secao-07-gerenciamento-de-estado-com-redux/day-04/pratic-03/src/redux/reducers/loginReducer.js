import { GET_USER } from "../actions";

const INITIAL_STATE = {
  email: '',
  password:'',
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      }
    default:
     return state;
  }
 }
 