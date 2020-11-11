import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { getScheduleOperation } from "../../redux/operations/scheduleOperations.js";
import { getDate } from "../../redux/actions/dateAction";

import "react-calendar/dist/Calendar.css";
import css from "./Calendar.module.css";
import "./CalendarDatePicker.css";

const Сalendar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [date, setDate] = useState(new Date());

  const onChange = (currentDate) => {
    // moment.locale("ru");
    const fomatDateForRedux = moment(currentDate).format("DD MMMM YYYY");
    dispatch(getDate(fomatDateForRedux));

    const formatedDateForFetch = moment(currentDate).format("YYYY-MM-DD");
    dispatch(getScheduleOperation(formatedDateForFetch));
    history.push("/schedule")
  };
  return (
    <div className={css.home}>
      <img className={css.home__img} src="../../helpers/img/main.png" width="200"/>
      <Calendar
        className={css.home__calendar}
        onChange={onChange}        
        value={date}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default Сalendar;
