import * as c from '../Actions/ActionTypes'

const initialState = {
  isLoggedIn: false,
  errors: null
};

const Auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case c.LOGIN:
      return {...state, isLoggedIn: true }
    case c.LOGOUT:
      return {...state, isLoggedIn: false }
    case c.SET_ERRORS:
      return {...state, errors: payload}
    case c.CLEAR_ERRORS:
      return {...state, errors: null}
    default:
      return state;
  }
};

export default Auth