import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

export const getTasks = (projectSlug) => async (dispatch) => {
  try {
    dispatch({ type: GET_TASKS_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks`,
      { headers: { token } }
    );
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
  } catch (error) {
    dispatch({
      type: CREATE_TASK_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getTask = (taskId, projectSlug) => async (dispatch) => {
  try {
    dispatch({ type: GET_TASK_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const result = await axios.get(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks/${taskId}`,
      { headers: { token } }
    );
    dispatch({ type: GET_TASK_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_TASK_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateTask = (task, taskId, projectSlug) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TASK_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const result = await axios.put(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks/${taskId}`,
      task,
      { headers: { token } }
    );
    dispatch({ type: UPDATE_TASK_SUCCESS, payload: result.data });
    const { data } = await axios.get(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks`,
      { headers: { token } }
    );
    dispatch({ type: GET_TASKS_SUCCESS, payload: data.tasks });
  } catch (error) {
    dispatch({
      type: UPDATE_TASK_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deleteTask = (taskId, projectSlug) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TASK_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const result = await axios.delete(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks/${taskId}`,
      { headers: { token } }
    );
    dispatch({ type: DELETE_TASK_SUCCESS, payload: result.data });
    const { data } = await axios.get(
      `https://project-management-2.herokuapp.com/api/${projectSlug}/tasks`,
      { headers: { token } }
    );
    dispatch({ type: GET_TASKS_SUCCESS, payload: data.tasks });
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
