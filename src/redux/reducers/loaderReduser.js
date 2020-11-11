import { createReducer } from "@reduxjs/toolkit";
import { loaderToggleAction } from "../actions/loaderAction";

const initialState = true;

export const loader = createReducer(initialState, {
  [loaderToggleAction]: (state) => !state,
})
