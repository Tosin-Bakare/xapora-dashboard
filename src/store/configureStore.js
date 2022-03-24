import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: [api],
});

export { store };
