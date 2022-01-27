const InitialState = {
  userId: 0,
  username: "",
  fullName: "", 
  email: "",
}

const User = (state = InitialState, { type, payload }) => {
  switch (type) {

  case "SET_USER":
    return { ...payload }

  default:
    return state
  }
}

export default User
