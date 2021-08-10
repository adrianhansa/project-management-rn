import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
} from "../constants/projectConstants";

export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      "https://project-management-2.herokuapp.com/api/user/profile",
      { headers: token }
    );
    dispatch({ type: GET_PROJECTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PROJECTS_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
