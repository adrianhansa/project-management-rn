import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CREATE_TASK_FAIL,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  GET_TASKS_FAIL,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
} from "../constants/taskConstants";

export const getTasks = (projectSlug) => async (dispatch) => {
  try {
    dispatch({ type: GET_TASKS_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks`,
      { headers: { token } }
    );
    console.log(data);
    dispatch({ type: GET_TASKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const createTask = (task, projectSlug) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_TASK_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const result = await axios.post(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks`,
      task,
      { headers: { token } }
    );
    dispatch({ type: CREATE_TASK_SUCCESS, payload: result.data });
    const { data } = await axios.get(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks`,
      { headers: { token } }
    );
    dispatch({ type: GET_TASKS_SUCCESS, payload: data.tasks });
  } catch (error) {
    dispatch({
      type: CREATE_TASK_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
