import { combineReducers } from "redux";
import { users, auth, productions, roles } from ".";

const rootReducer = combineReducers({
  auth,
  users,
  productions,
  roles,
});

export default rootReducer;
