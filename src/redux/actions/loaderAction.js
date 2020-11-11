import { createAction } from "@reduxjs/toolkit";
import {LOADER_TOGGLE}  from "../constants/loaderConstants";

export const loaderToggleAction = createAction(LOADER_TOGGLE);
