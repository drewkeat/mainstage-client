import { useState } from "react";
import { connect } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"

import {setCurrentUser} from '../../Actions/UserActions'

function Landing({...props}) {
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
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
    props.setCurrentUser(formValues)
    // QUESTION: How do I display error messages from API?
    navigate('/user')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="email"
          style={styles}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          style={styles}
          onChange={handleChange}
        />
        <input type="submit" value="Log In" style={styles} />
        <Link to="/newaccount" style={{textDecoration: "none"}} >
          <input type="button" value="Create Account" style={styles} />
        </Link>
      </form>
    </div>
  );
}

export default connect(state => ({errors: state.auth.errors}), {setCurrentUser})(Landing);
