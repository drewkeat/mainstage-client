import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"


function LoginForm({loginUser,...props}) {

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
    loginUser(formValues, navigate)
    setformValues({email: "", password: ""})
  };

  return (
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
        <Link to="/signup" style={{textDecoration: "none"}} >
          {/* QUESTION: How do I clear errors on navigation? */}
          <input type="button" value="Sign Up" style={styles}/>
        </Link>
      </form>
  );
}

export default LoginForm;
