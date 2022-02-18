import * as ACTION from "../Actions/ActionTypes";
const InitialState = {};

const Users = (state = InitialState, action) => {
  switch (action.type) {
    // TODO: Adjust reducer to set relationships from api serializer
    case ACTION.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {...action.payload.attributes,
        userId: action.payload.id,}
      };
    case ACTION.CLEAR_CURRENT_USER:
      return {
        ...state, currentUser: {}
      }
    default:
      return state;
  }
};

export default Users;
