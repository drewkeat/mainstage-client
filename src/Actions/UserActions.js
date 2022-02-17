import * as c from "./ActionTypes"
import BASE_URL from '../api'

const setCurrentUser = (userData) => {
  return ({type: c.SET_CURRENT_USER, payload: userData})
}

const createUser = (userValues, navigate) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: userValues})
    })
    .then(resp => {
      if (!resp.ok){
        return resp.json().then(error => {
          throw new Error(error)
        })
      } else {
        const jwt = resp.headers.get('jwt')
        window.localStorage.setItem('jwt', jwt)
        return resp.json()
      }
    })
    .then( json => {
      dispatch({type: c.SET_CURRENT_USER, payload: json.data})
      dispatch({type: c.LOGIN})
      dispatch({type: c.CLEAR_ERRORS})
      navigate("/dashboard")
    })
    .catch(error => {
      dispatch({type: c.SET_ERRORS, payload: error.message.split(",")})
    })
  }
}

export {setCurrentUser, createUser}