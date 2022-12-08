import { GET_USER } from "./index";

const getUserAction = (email, password) => ({
  type: GET_USER,
  payload: {
    email,
    password,
  }
});

export default getUserAction;
