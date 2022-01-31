import { useState } from "react";
import { connect } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"

import {setCurrentUser} from '../../Actions/UserActions'
import { clearErrors, CLEAR_ERRORS } from '../../Actions/ActionTypes'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCurrentUser(formValues, navigate)
    setformValues({email: "", password: ""})
  };

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
          {/* QUESTION: How do I clear errors on navigation? */}
          <input type="button" value="Create Account" style={styles}/>
        </Link>
      </form>
    </div>
  );
}

export default connect(state => ({errors: state.auth.errors }), {setCurrentUser})(Landing);
