import * as ACTION from "./ActionTypes"
import normalize from 'json-api-normalizer'
import BASE_URL from '../api'

const loginUser = (loginValues, navigate) => {
  return (dispatch) => {
    dispatch({type: ACTION.FETCHING})
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
      let userData = normalize(json)
      dispatch({type: ACTION.SET_CURRENT_USER, payload: userData.user})
      dispatch({type: ACTION.LOGIN})
      dispatch({type: ACTION.CLEAR_ERRORS})
      dispatch({type: ACTION.FETCH_COMPLETE})
      navigate("/dashboard")
    })
    .catch(error => {
      dispatch({type: ACTION.SET_ERRORS, payload: error.message.split(",")})
      dispatch({type: ACTION.FETCH_COMPLETE})
    })
  }
}

const authenticateJWT = (jwt) => {
  return (dispatch) => {
    dispatch({type: ACTION.FETCHING})
    fetch(`${BASE_URL}/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then(resp => {
      if (!resp.ok) {
        return resp.json().then(error => {
          throw new Error(error.message)
        })
      } else {
        return resp.json()
      }
    })
    .then( json => {
      let userData = normalize(json)
      dispatch({type: ACTION.SET_CURRENT_USER, payload: userData.user})
      dispatch({type: ACTION.LOGIN})
      dispatch({type: ACTION.CLEAR_ERRORS})
      dispatch({type: ACTION.FETCH_COMPLETE})
    })
    .catch(error => {
      dispatch({type: ACTION.SET_ERRORS, payload: error.message.split(",")})
      dispatch({type: ACTION.FETCH_COMPLETE})
    })
  }
}

export {loginUser, authenticateJWT }