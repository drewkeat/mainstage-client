import { connect } from "react-redux"

import { createUser } from "../../Actions/UserActions";
import SignupForm from "./components/SignupForm";


export function Signup({createUser,...props}) {
  
  const renderErrors = () => {
    if (props.errors) {
      return (
        <div style={{margin: "auto", width: "fit-content", textAlign: "center"}}>
          {props.errors.map(error => <p key={error} style={{color: "red", textDecoration: "underline"}}>{error}</p>)}
        </div>
      )
    }
  }

  return (
    <div>
      {renderErrors()}
      <SignupForm createUser={createUser}/>
    </div>
  );
}

export default connect(state => ({errors: state.auth.errors}), { createUser })(Signup);
