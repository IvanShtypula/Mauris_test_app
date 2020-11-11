import { createAction } from "@reduxjs/toolkit";
import {GET_SCHEDULE} from "../constants/scheduleConstants";

export const getSchedule = createAction(GET_SCHEDULE);
