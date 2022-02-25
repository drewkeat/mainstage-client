import {combineReducers} from 'redux'
import { users, auth, productions} from '.'

const rootReducer = combineReducers({
  auth,
  users,
  productions,
})

export default rootReducer