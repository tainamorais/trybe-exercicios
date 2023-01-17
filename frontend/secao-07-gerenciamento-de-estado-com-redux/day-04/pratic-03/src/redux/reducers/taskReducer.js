import { GET_TASK } from "../actions";

const INITIAL_STATE = {
  task: '',
  owner:'',
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_TASK:
      return {
        ...state,
        task: action.payload.task,
        owner: action.payload.owner,
      }
    default:
     return state;
  }
 }
 