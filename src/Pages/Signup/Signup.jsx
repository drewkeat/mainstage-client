import { connect } from "react-redux"
import SignupForm from "./components/SignupForm";


export function Signup({...props}) {
  
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
      <SignupForm />
    </div>
  );
}

export default connect(state => ({errors: state.auth.errors}))(Signup);
