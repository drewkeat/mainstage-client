import * as ACTION from "./ActionTypes";
import normalize from "json-api-normalizer";

import fetchFrom from "../Helpers/fetchFrom";
import { fetchProduction } from "./ProductionActions";

const fetchRole = (roleId) => {
  return (dispatch) => {
    dispatch({ type: ACTION.FETCHING });
    fetchFrom(`/roles/${roleId}`, { method: "GET" })
      .then((json) => {
        const role = normalize(json).role;
        // QUESTION: How do I simplify the fetching/storing of related models?
        const productionId = role[roleId].relationships.production.data.id
        // QUESTION: Dispatch isn't passed into this fetch request... how do I load related models into my store?
        fetchProduction(productionId)
        dispatch({ type: ACTION.FETCH_ROLE, payload: role });
        dispatch({ type: ACTION.FETCH_COMPLETE });
      })
      .catch((error) => {
        dispatch({
          type: ACTION.SET_ERRORS,
          payload: error.messages.split(", "),
        });
        dispatch({ type: ACTION.FETCH_COMPLETE });
      });
  };
};

export { fetchRole };
