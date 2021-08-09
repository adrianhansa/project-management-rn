import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DELETE_ACCOUNT_FAIL,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants";

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(
      "https://project-management-2.herokuapp.com/api/user/login",
      credentials
    );
    if (data.success) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const register = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post(
      "https://project-management-2.herokuapp.com/api/user/register",
      credentials
    );
    if (data.success) {
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      "https://project-management-2.herokuapp.com/api/user/profile",
      { headers: { token } }
    );

    if (data.success) {
      dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateProfile = (profile) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const { data } = await axios.put(
      "https://project-management-2.herokuapp.com/api/user/profile",
      profile
    );
    if (data.sucess) {
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ACCOUNT_REQUEST });
    const { data } = await axios.put(
      "https://project-management-2.herokuapp.com/api/users/profile",
      profile
    );
    if (data.sucess) {
      dispatch({ type: DELETE_ACCOUNT_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: DELETE_ACCOUNT_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
