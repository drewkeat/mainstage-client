import * as c from "../Actions/ActionTypes";
// QUESTION:  Should I create reducers and actions for each of my models?
// QUESTION:  How often should I be making API calls throughout a user's experience?  Should I call all of the productions on the initial login request?
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
