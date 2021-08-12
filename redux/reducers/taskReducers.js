import { ActionSheetIOS } from "react-native";
import {
  CREATE_TASK_FAIL,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  GET_TASKS_FAIL,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
} from "../constants/taskConstants";

export const getTasksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return { loading: true };
    case GET_TASKS_SUCCESS:
      return { loading: false, tasks: action.payload };
    case GET_TASKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK_REQUEST:
      return { loading: true };
    case CREATE_TASK_SUCCESS:
      return { loading: false, task: action.payload };
    case CREATE_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
