import * as ACTION from '../Actions/ActionTypes'

const initialState = {}

const Roles = (state = initialState, { type, payload }) => {
  switch (type) {

  case ACTION.SET_ROLE:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default Roles