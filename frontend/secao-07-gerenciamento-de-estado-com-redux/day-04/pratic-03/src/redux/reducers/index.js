import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { taskReducer } from './taskReducer';

const rootReducer = combineReducers({ 
  user: loginReducer,
  task: taskReducer,
})

export default rootReducer;
