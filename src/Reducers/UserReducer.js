import * as ACTION from "../Actions/ActionTypes";
const InitialState = {};

const Users = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION.SET_CURRENT_USER:
      let userId = Object.keys(action.payload)[0];
      let currentUser = action.payload[userId];
      return {
        ...state,
        currentUser: { ...currentUser },
      };
    case ACTION.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: {},
      };
    case ACTION.SET_USERS:
      return {
        ...state,
        all: { ...action.payload },
      };
    default:
      return state;
  }
};

export default Users;
