import { useState } from "react";
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'

import { createUser } from '../../Actions/UserActions'

export function NewAccount({...props}) {
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

  const renderErrors = () => {
    if (props.errors) {
      return (
        <div style={{margin: "auto", width: "fit-content", textAlign: "center"}}>
          {props.errors.map(error => <p key={error} style={{color: "red", textDecoration: "underline"}}>{error}</p>)}
        </div>
      )
    }
  }

  return (
    <>
      {renderErrors()}
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
            placeholder="secret password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password: </label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="make sure there's no typos"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Create Account" />
      </form>
    </>
  );
}

export default connect(state => ({errors: state.auth.errors}), {createUser})(NewAccount);
