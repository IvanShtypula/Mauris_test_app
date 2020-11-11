import { createReducer } from "@reduxjs/toolkit";
import {getSchedule} from "../actions/scheduleAction.js"

const initialState = [];
export const schedule = createReducer(initialState, {
  [getSchedule]: (_, { payload }) => payload,
});

