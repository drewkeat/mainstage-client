import * as c from '../Actions/ActionTypes'

const initialState = {
  authorized: false,
  errors: null
};

const Auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case c.AUTHORIZE:
      return {...state, authorized: true }
    case c.DEAUTHORIZE:
      return {...state, authorized: false }
    case c.SET_ERRORS:
      return {...state, errors: payload}
    case c.CLEAR_ERRORS:
      return {...state, errors: null}
    default:
      return state;
  }
};

export default Auth