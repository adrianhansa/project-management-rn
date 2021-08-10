import {
  GET_PROJECTS_REQUEST,
  GET_PROJECT_SUCCESS,
} from "../constants/projectConstants";
import { GET_PROFILE_FAIL } from "../constants/userConstants";

export const getProjectsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { loading: true };
    case GET_PROJECT_SUCCESS:
      return { loading: false, projects: action.payload };
    case GET_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
