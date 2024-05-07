import { combineReducers } from "redux";
import userReducer from "./userReducer";
import deviceReducer from "./deviceReducer";

const reducers = combineReducers({
  user: userReducer,
  isMobile: deviceReducer,
});

export default reducers;
