import { useState } from "react";
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

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
// TODO: Route user to profile on success/display message on error
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCurrentUser(formValues)
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

export default connect(null, {setCurrentUser})(Landing);
