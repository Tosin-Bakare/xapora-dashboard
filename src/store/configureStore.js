import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/api";
import logger from "./middleware/logger";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      }
    }),
    logger('console'),
    api
  ],
});

export { store };