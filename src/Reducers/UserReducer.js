// QUESTION: Why does my store clear when a user reloads? Can I persist the store?
const InitialState = {
  userId: 0,
  username: "",
  fullName: "",
  firstName: "",
  lastName: "",
  email: "",
};

const User = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_USER":
      let user = {
        ...action.payload.data.attributes,
        userId: action.payload.data.id,
      };
      return { user };

    default:
      return state;
  }
};

export default User;
