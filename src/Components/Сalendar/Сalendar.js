import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";
import moment from "moment";
import { useHistory } from "react-router-dom";
import "moment/locale/ru";

import { getScheduleOperation } from "../../redux/operations/scheduleOperations.js";
import { getDate } from "../../redux/actions/dateAction";

import "react-calendar/dist/Calendar.css";
import css from "./Calendar.module.css";
import "./CalendarDatePicker.css";

const Сalendar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [date, setLabelDate] = useState(new Date()); 

  const onChange = (currentDate) => {
    const fomatDateForRedux = moment(currentDate).format("DD MMMM YYYY");
    dispatch(getDate(fomatDateForRedux));

    const formatedDateForRequest = moment(currentDate).format("YYYY-MM-DD");
    dispatch(getScheduleOperation(formatedDateForRequest));
    history.push("/schedule");
  }; 
  return (
    <div className={css.home}>
      <div className={css.home__img}></div>
      <p className={css.home__instruction}>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </p>
      <Calendar
        className={css.home__calendar}
        onChange={onChange}             
        value={date}              
        next2Label={null}
        prev2Label={null}      
        navigationLabel={({ date }) =>
          `${moment(date).format("MMMM")}`.charAt(0).toUpperCase() +
          `${moment(date).format("MMMM")}`.slice(1)
        }
      />
    </div>
  );
};

export default Сalendar;
