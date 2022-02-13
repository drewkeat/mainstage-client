import * as c from "./ActionTypes"

const BASE_URL = "http://localhost:3001"
// const BASE_URL = "http://mainstage-backend.herokuapp.com"

const loginUser = (loginValues, navigate) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: loginValues})
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
    .then(json => {
      dispatch({type: c.SET_CURRENT_USER, payload: json.data})
      dispatch({type: c.LOGIN})
      dispatch({type: c.CLEAR_ERRORS})
      navigate("/dashboard")
    })
    .catch(error => {
      dispatch({type: c.SET_ERRORS, payload: error.message.split(",")})
      setTimeout(() => {
        dispatch({type: c.CLEAR_ERRORS})
      }, 3000);
    })
  }
}

const authenticateJWT = () => {
  const jwt = localStorage.getItem('jwt')
  return dispatch => {
    fetch(`${BASE_URL}/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then(resp => resp.json())
    .then( json => {
      dispatch({type: c.SET_CURRENT_USER, payload: json.data})
      dispatch({type: c.LOGIN})
      dispatch({type: c.CLEAR_ERRORS})
    })
  }
}

export {loginUser, authenticateJWT }