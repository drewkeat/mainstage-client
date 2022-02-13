import { connect } from "react-redux"

import { createUser } from "../../Actions/UserActions";
import SignupForm from './components/SignupForm'


export function Signup({createUser,...props}) {
  return(
    <SignupForm createUser={ createUser }/>
  )
}

export default connect(state => ({errors: state.auth.errors}), { createUser })(Signup);
