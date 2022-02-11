import * as c from "../Actions/ActionTypes";
// QUESTION: Why does my store clear when a user reloads? Can I persist the store?
// TODO: Convert SET_CURRENT_USER action to set user state based on jwt to implement on user page/ (separate login functionality)
const InitialState = {};

const User = (state = InitialState, action) => {
  switch (action.type) {
    case c.SET_CURRENT_USER:
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
