import * as c from "../Actions/ActionTypes";
// QUESTION: Why does my store clear when a user reloads? Can I persist the store?
const InitialState = {};

const User = (state = InitialState, action) => {
  switch (action.type) {
    case c.SET_USER:
      return {
        ...state,
        ...action.payload.attributes,
        userId: action.payload.id,
      };
    case c.CREATE_USER:
      return {
        ...state,
        ...action.payload.attributes,
        userId: action.payload.id,
      };
    default:
      return state;
  }
};

export default User;
