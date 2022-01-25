import { useState } from "react";
import { connect } from 'react-redux'

import {setCurrentUser} from '../Actions/UserActions'

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
        <input type="button" value="Create Account" style={styles} />
      </form>
    </div>
  );
}

export default connect(null, {setCurrentUser})(Landing);
