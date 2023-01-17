import { GET_TASK } from "./index";

const getTaskAction = (task, owner) => ({
  type: GET_TASK,
  payload: {
    task,
    owner,
  }
});

export default getTaskAction;