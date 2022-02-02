import { connect } from "react-redux";
import { setCurrentUser } from "../../Actions/UserActions";


import LoginForm from "./components/LoginForm";

function Landing({setCurrentUser, ...props}) {

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
      <LoginForm setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default connect(state => ({errors: state.auth.errors }), { setCurrentUser })(Landing);
