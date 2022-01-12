const initialState = {
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "DO_SOMETHING":
    return { ...state, ...payload }

  default:
    return state
  }
}
