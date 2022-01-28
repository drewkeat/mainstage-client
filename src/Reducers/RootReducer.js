import {combineReducers} from 'redux'
import user from "./UserReducer";
import auth from "./AuthReducer";

const rootReducer = combineReducers({
  user,
  auth
})

export default rootReducer