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
  ({ dispatch, getState }) =>
  (next) => {
    async (action) => {
      if (action.type !== actions.apiCallBegan) return next(action);

      const { url, method, data, onSuccess, onStart, onError, type } =
        action.payload;

      if (onStart) dispatch({ type: onStart });
      next(action);

      try {
        const response = await axios.request({
          baseUrl: getBaseURL(type),
          url,
          method,
        });

        dispatch(actions.apiCallSuccess(response.data));  
      } catch (e) {
        // General
        dispatch(actions.apiCallFailed(e?.response?.data?.message));

        //Specific
        dispatch({ type: onError, payload: e?.response?.data?.message });
      }
    };
  };
export default api;
