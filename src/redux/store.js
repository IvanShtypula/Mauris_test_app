import { configureStore } from "@reduxjs/toolkit";
import { schedule } from "../redux/reducers/scheduleReducer";
import { date } from "../redux/reducers/dateReducer";
import { loader } from "../redux/reducers/loaderReduser";

const store = configureStore({
  reducer: {
    schedule: schedule,
    date: date,
    loader: loader,
  },
});

export default store;
