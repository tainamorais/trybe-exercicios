import { USER_INFORMATION } from "../actions";
import { USER_PREFERENCES } from "../actions";

const INITIAL_STATE = {
  username: {
    name: '',
  },
  userpreferences: {
    favoriteColor: '',
    favoriteFruit: '',
  },
};
// isso acima será usado no projeto

// a lógica deste caso é salvar as informações no estado
const formReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case USER_INFORMATION:
    return {
      ...state,
      username: { name: action.payload },
    }
    case USER_PREFERENCES:
      return {
        ...state,
        userpreferences: {
          favoriteColor: action.payload.favoriteColor,
          favoriteFruit: action.payload.favoriteFruit,
        },
      }
  default:
    return state;
 }
}

export default formReducer;
