import * as ACTION from "./ActionTypes"
import normalize from 'json-api-normalizer'

import fetchFrom from '../Helpers/fetchFrom'

const loginUser = (loginValues, navigate) => {
  return (dispatch) => {
    dispatch({type: ACTION.FETCHING})
    fetchFrom('/login', {method: "POST", body: {user: loginValues}})
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
    fetchFrom('/authenticate', {method: "POST"})
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