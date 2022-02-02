import { connect } from "react-redux";

import LoginForm from "./components/LoginForm";

function Landing({...props}) {

  const renderErrors = () => {
    if (props.errors) {
      return (
        <div style={{margin: "auto", width: "fit-content", textAlign: "center"}}>
          {props.errors.map(error => <p style={{color: "red", textDecoration: "underline"}}>{error}</p>)}
          
        </div>
      )
    }
  }

  return (
    <div>
      {renderErrors()}
      <LoginForm />
    </div>
  );
}

export default connect(state => ({errors: state.auth.errors }))(Landing);
