import * as ACTION from '../Actions/ActionTypes'

const initialState = {
  isLoggedIn: false,
  errors: null
};

const Auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION.LOGIN:
      return {...state, isLoggedIn: true }
    case ACTION.LOGOUT:
      return {...state, isLoggedIn: false }
    case ACTION.SET_ERRORS:
      return {...state, errors: payload}
    case ACTION.CLEAR_ERRORS:
      return {...state, errors: null}
    default:
      return state;
  }
};

export default Auth