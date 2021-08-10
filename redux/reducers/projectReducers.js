import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
} from "../constants/projectConstants";

export const getProjectsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { loading: true };
    case GET_PROJECTS_SUCCESS:
      return { loading: false, projects: action.payload };
    case GET_PROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
