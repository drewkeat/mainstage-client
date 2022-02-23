import * as ACTION from "./ActionTypes";
import BASE_URL from "../api";
import normalize from 'json-api-normalizer'

import fetchFrom from '../Helpers/fetchFrom'

const setCurrentUser = (userData) => {
  return { type: ACTION.SET_CURRENT_USER, payload: userData };
};

const createUser = (userValues, navigate) => {
  return (dispatch) => {
    dispatch({ type: ACTION.FETCHING });
    fetchFrom('/users', {method: "POST", body: {user: userValues }})
      .then((json) => {
        let userData = normalize(json)
        dispatch({ type: ACTION.SET_CURRENT_USER, payload: userData.user });
        dispatch({ type: ACTION.LOGIN });
        dispatch({ type: ACTION.CLEAR_ERRORS });
        dispatch({ type: ACTION.FETCH_COMPLETE });
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch({
          type: ACTION.SET_ERRORS,
          payload: error.message.split(","),
        });
        dispatch({ type: ACTION.FETCH_COMPLETE });
      });
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: ACTION.FETCHING });
    fetchFrom('/users', {method: "GET"})
    .then(json => {
      const userData = normalize(json)
      dispatch({type: ACTION.SET_USERS, payload: userData.user})
    })
    .catch(error => 
      dispatch({type: ACTION.SET_ERRORS, payload: error.message.split(",")}),
      dispatch({type: ACTION.FETCH_COMPLETE})
      );
  }
};

export { setCurrentUser, createUser, fetchUsers };
