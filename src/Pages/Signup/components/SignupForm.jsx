import { useState } from "react";
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'

import { createUser } from "../../../Actions/UserActions";


function SignupForm(props) {
  const [userValues, setUserValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const handleChange = (e) => {
    return setUserValues({...userValues, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.createUser(userValues, navigate)
  }


  return (
    <form onSubmit={handleSubmit}>
        <h1>Create New Account</h1>
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            name="first_name"
            placeholder="John"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            name="last_name"
            placeholder="Doe"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            name="email"
            placeholder="john.doe@email.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Secret Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password: </label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Check for typos"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Create Account" />
      </form>
  );
}

export default connect(null, { createUser })(SignupForm);
