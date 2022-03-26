import axios from "axios";
import * as actions from "../api";

const getBaseURL = (reqType) => {
  let baseURL = "https://xapora.herokuapp.com/api/v1";
  switch (reqType) {
    case "item":
    case "category":
    case "department":
      baseURL += "/item";
      baseURL += "/category";
      baseURL += "/department";
      break;
    default:
      baseURL += "/department";
  }

  return baseURL;
};

const api =
  ({ dispatch }) =>
    (next) =>
      async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { url, method, data, onSuccess, onStart, onError, type } =
          action.payload;

        if (onStart) dispatch({ type: onStart });
        next(action);

        try {
          const response = await axios.request({
            baseURL: getBaseURL(type),
            url,
            data,
            method,
          });

          // General
          dispatch(actions.apiCallSuccess(response.data));

          //specific
          if (onSuccess) dispatch({ type: onSuccess, payload: response.data });

        } catch (e) {
          // General
          dispatch(actions.apiCallFailed(e?.response?.data?.message));

          //Specific
          if (onError)
            dispatch({ type: onError, payload: e?.response?.data?.message });
        }
      };
export default api;
