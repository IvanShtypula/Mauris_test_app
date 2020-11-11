import { createReducer } from "@reduxjs/toolkit";
import {getDate} from "../actions/dateAction"


export const date = createReducer("", {
  [getDate]: (_, { payload }) => payload,
});