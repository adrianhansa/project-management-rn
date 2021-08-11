import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deleteAccountReducer,
  getProfileReducer,
  loginReducer,
  registerReducer,
  updateProfileReducer,
} from "./reducers/userReducers";

import {
  getProjectsReducer,
  getProjectReducer,
  createProjectReducer,
  updateProjectReducer,
  deleteProjectReducer,
} from "./reducers/projectReducers";

import { createTaskReducer, getTasksReducer } from "./reducers/taskReducers";

const middleare = composeWithDevTools(applyMiddleware(thunk));
const rootReducer = combineReducers({
  userLoggedIn: loginReducer,
  userRegistered: registerReducer,
  profile: getProfileReducer,
  profileUpdated: updateProfileReducer,
  deletedAccount: deleteAccountReducer,
  getProjects: getProjectsReducer,
  getProject: getProjectReducer,
  createdProject: createProjectReducer,
  updatedProject: updateProjectReducer,
  deletedProject: deleteProjectReducer,
  tasks: getTasksReducer,
  createdTask: createTaskReducer,
});

const store = createStore(rootReducer, middleare);

export default store;
