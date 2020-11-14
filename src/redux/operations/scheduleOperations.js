import axios from "axios";
import { getSchedule } from "../actions/scheduleAction";
import { loaderToggleAction } from "../actions/loaderAction";

export const getScheduleOperation = (date) => async (dispatch) => {
  try {
    dispatch(loaderToggleAction());
    const { data } = await axios({
      method: "get",
      url: `https://api.tvmaze.com/schedule?country=US&date=${date}`,
    });
    dispatch(getSchedule(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderToggleAction());
  }
};