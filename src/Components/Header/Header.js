import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { getSchedule } from "../../redux/actions/scheduleAction";

import css from "./Header.module.css";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let scheduleList = useSelector((state) => state.schedule);
  const boleanList = !!scheduleList.length;

  const handleGoBack = () => {
    history.push("/");
    dispatch(getSchedule([]));
  };
  return (
    <div className={css.header}>
      <h2 className={css.header__title}>SUPER FILM</h2>
      {boleanList && (
        <button className={css.header__goback_btn} onClick={handleGoBack} />
      )}
    </div>
  );
};

export default Header;
