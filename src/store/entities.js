import { combineReducers } from "@reduxjs/toolkit";
import item from "./items";
import category from "./category";
import department from "./department";

export default combineReducers({
  item,
  category,
  department,
});
