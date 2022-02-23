import {combineReducers} from 'redux'
// TODO: Can reducers be consolidated to one line?
import users from "./UserReducer";
import auth from "./AuthReducer";
import productions from './ProductionReducer'

const rootReducer = combineReducers({
  users,
  auth,
  productions,
})

export default rootReducer