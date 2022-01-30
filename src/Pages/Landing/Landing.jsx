import { useState } from "react";
import { connect } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"

import {setCurrentUser} from '../../Actions/UserActions'

function Landing({...props}) {
  const [formValues, setformValues] = useState({
    email: "",
    password: ""
  });

  const styles = {
    display: "block",
    margin: "auto",
    marginTop: ".25rem",
  };

  const handleChange = (e) => {
    setformValues({...formValues,
      [e.target.name]: e.target.value,
    });
  };

  let navigate = useNavigate()

// TODO: Route user to profile on success/display message on error
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCurrentUser(formValues, navigate)
    // QUESTION: How do I display error messages from API?
    setformValues({email: "", password: ""})
  };

  const renderErrors = () => {
    if (props.errors) {
      return (
        <div style={{margin: "auto", width: "fit-content", textAlign: "center"}}>
          <p style={{color: "red", textDecoration: "underline"}}>{props.errors}</p>
        </div>
      )
    }
  }

  return (
    <div>
      {renderErrors()}
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="email"
          style={styles}
          onChange={handleChange}
          value={formValues.email}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          style={styles}
          onChange={handleChange}
          value={formValues.password}
        />
        <input type="submit" value="Log In" style={styles} />
        <Link to="/newaccount" style={{textDecoration: "none"}} >
          <input type="button" value="Create Account" style={styles} />
        </Link>
      </form>
    </div>
  );
}

export default connect(state => ({errors: state.auth.errors }), {setCurrentUser})(Landing);
