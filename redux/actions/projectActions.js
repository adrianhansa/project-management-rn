import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
} from "../constants/projectConstants";

const token = await AsyncStorage.getItem("token");

export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS_REQUEST });
    const { data } = await axios.get(
      "https://project-management-2.herokuapp.com/api/projects",
      { headers: { token } }
    );
    dispatch({ type: GET_PROJECTS_SUCCESS, payload: data.projects });
  } catch (error) {
    dispatch({
      type: GET_PROJECTS_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getProject = (projectSlug) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECT_REQUEST });
    const { data } = await axios.get(
      `https://project-management-2.herokuapp.com/api/projects/${projectSlug}`,
      { headers: { token } }
    );
    dispatch({ type: GET_PROJECT_SUCCESS, payload: data.project });
  } catch (error) {
    dispatch({
      type: GET_PROJECT_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const createProject = (project) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PROJECT_REQUEST });
    const { data } = await axios.post(
      `https://project-management-2.herokuapp.com/api/projects/`,
      project,
      { headers: { token } }
    );
    dispatch({ type: CREATE_PROJECT_SUCCESS, payload: data.project });
  } catch (error) {
    dispatch({
      type: CREATE_PROJECT_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateProject = (project) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROJECT_REQUEST });
    const { data } = await axios.put(
      `https://project-management-2.herokuapp.com/api/projects/${projectSlug}`,
      project,
      { headers: { token } }
    );
    dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: data.project });
  } catch (error) {
    dispatch({
      type: UPDATE_PROJECT_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deleteProject = () => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST });
    const { data } = await axios.put(
      `https://project-management-2.herokuapp.com/api/projects/${projectSlug}`,
      project,
      { headers: { token } }
    );
    dispatch({ type: DELETE_PROJECT_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
