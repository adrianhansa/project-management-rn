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

import { getProjectsReducer } from "./reducers/projectReducers";

const middleare = composeWithDevTools(applyMiddleware(thunk));
const rootReducer = combineReducers({
  userLoggedIn: loginReducer,
  userRegistered: registerReducer,
  profile: getProfileReducer,
  profileUpdated: updateProfileReducer,
  deletedAccount: deleteAccountReducer,
  getProjects: getProjectsReducer,
});

const store = createStore(rootReducer, middleare);

export default store;
