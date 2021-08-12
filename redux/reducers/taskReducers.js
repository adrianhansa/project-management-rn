import { ActionSheetIOS } from "react-native";
import {
  CREATE_TASK_FAIL,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  GET_TASKS_FAIL,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASK_FAIL,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
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

export const getTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TASK_REQUEST:
      return { loading: true };
    case GET_TASK_SUCCESS:
      return { loading: false, task: action.payload };
    case GET_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TASK_REQUEST:
      return { loading: true };
    case UPDATE_TASK_SUCCESS:
      return { loading: false, task: action.payload };
    case UPDATE_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TASK_REQUEST:
      return { loading: true };
    case DELETE_TASK_SUCCESS:
      return { loading: false, task: action.payload };
    case DELETE_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
