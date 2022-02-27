import * as ACTION from "../Actions/ActionTypes";

const initialState = {};

const Productions = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION.SET_PRODUCTION:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default Productions;
