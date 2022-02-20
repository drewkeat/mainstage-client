import * as ACTION from "./ActionTypes";
import BASE_URL from "../api";
import normalize from 'json-api-normalizer'

const setCurrentUser = (userData) => {
  return { type: ACTION.SET_CURRENT_USER, payload: userData };
};

const createUser = (userValues, navigate) => {
  return (dispatch) => {
    dispatch({ type: ACTION.FETCHING });
    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userValues }),
    })
      .then((resp) => {
        if (!resp.ok) {
          return resp.json().then((error) => {
            throw new Error(error);
          });
        } else {
          const jwt = resp.headers.get("jwt");
          window.localStorage.setItem("jwt", jwt);
          return resp.json();
        }
      })
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
    fetch(`${BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(resp => {
      if (!resp.ok) {
        return resp.json().then(error => { throw new Error(error)})
      } else {
        return resp.json()
      }
    })
    .then(json => {
      const userData = normalize(json)
      dispatch({type: ACTION.SET_USERS, payload: userData.user})
    })
    .catch(error => console.log('error', error));
  }
};

export { setCurrentUser, createUser, fetchUsers };
