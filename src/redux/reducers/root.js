import { combineReducers } from "@reduxjs/toolkit";
import { date } from "./dateReducer";
import { loader } from "./loaderReduser";
import { schedule } from "./scheduleReducer";

export const rootReducer = combineReducers({
  date,
  loader,
  schedule,
});
