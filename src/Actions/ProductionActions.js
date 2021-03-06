import * as ACTION from "./ActionTypes";
import normalize from 'json-api-normalizer'

import fetchFrom from '../Helpers/fetchFrom'

const fetchProduction = (productionId) => {
  return dispatch => {
    dispatch({type: ACTION.FETCHING})
    fetchFrom(`/productions/${productionId}`, {method: "GET"})
    .then(json => {
      const production = normalize(json).production
      dispatch({type: ACTION.SET_PRODUCTION, payload: production})
      dispatch({type: ACTION.FETCH_COMPLETE})
    })
    .catch(error => {
      dispatch({type: ACTION.SET_ERRORS, payload: error.messages.split(', ')})
      dispatch({type: ACTION.FETCH_COMPLETE})
    })
  }
}

export {fetchProduction}