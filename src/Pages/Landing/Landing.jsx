import { useState } from "react";
import { connect } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"

import {setCurrentUser} from '../../Actions/UserActions'

function Landing({...props}) {
  const [formValues, setformValues] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({messages: []})

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
    props.setCurrentUser(formValues, navigate, setErrors)
    // QUESTION: How do I display error messages from API?
    setformValues({email: "", password: ""})
  };

  const renderErrors = () => {
    if (errors.messages.length){
      return (
        <div style={{margin: "auto", width: "fit-content"}}>
          <h3>We hit a snag</h3>
          {errors.messages.map(message => <li key={message}>{message}</li>)}
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

export default connect(null, {setCurrentUser})(Landing);
