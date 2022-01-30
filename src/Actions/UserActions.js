import * as c from "./ActionTypes"

const setCurrentUser = (loginValues, navigate, setErrors) => {
  return (dispatch) => {
    let result = "success"
    fetch("http://mainstage-backend.herokuapp.com/login", {
    // fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: loginValues})
    })
    .then(resp => {
      if (!resp.ok){
        return resp.json().then(error => {throw new Error(error.message)})
      }
      else {
        const jwt = resp.headers.get('jwt')
        window.localStorage.setItem('jwt', jwt)
        return resp.json()
      }
    })
    .then(json => {
      dispatch({type: c.SET_USER, payload: json.data})
      dispatch({type: c.AUTHORIZE})
      navigate("/user")
    })
    .catch(error => dispatch({type: c.SET_ERRORS, payload: error.message}))
  }
}

export {setCurrentUser}