import * as c from "../Actions/ActionTypes";
// QUESTION: Why does my store clear when a user reloads? Can I persist the store?
// TODO: Convert SET_CURRENT_USER action to set user state based on jwt to implement on user page/ (separate login functionality)
const InitialState = {};

const Users = (state = InitialState, action) => {
  switch (action.type) {
    case c.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {...action.payload.attributes,
        userId: action.payload.id,}
      };
    case c.CLEAR_CURRENT_USER:
      return {
        ...state, currentUser: {}
      }
    default:
      return state;
  }
};

export default Users;
