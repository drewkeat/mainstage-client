import { connect } from "react-redux"

import { createUser } from "../../Actions/UserActions";
import StyledSignupForm from './components/StyledSignupForm'


export function Signup({createUser,...props}) {
  return(
    <StyledSignupForm createUser={ createUser }/>
  )
}

export default connect(state => ({errors: state.auth.errors}), { createUser })(Signup);
