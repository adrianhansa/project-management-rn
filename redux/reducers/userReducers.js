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

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case LOGIN_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case REGISTER_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getProfileReducer = (state = {}, action) => {
  switch (action.state) {
    case GET_PROFILE_REQUEST:
      return { loading: true };
    case GET_PROFILE_SUCCESS:
      return { loading: false, success: true, profile: action.payload };
    case GET_PROFILE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const updateProfileReducer = (state = {}, action) => {
  switch (action.state) {
    case UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, profile: action.payload };
    case UPDATE_PROFILE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ACCOUNT_REQUEST:
      return { loading: true };
    case DELETE_ACCOUNT_SUCCESS:
      return { loading: false, success: true, userAccount: action.payload };
    case DELETE_ACCOUNT_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
