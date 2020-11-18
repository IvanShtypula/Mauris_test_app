import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Сalendar from "../../Components/Сalendar/Сalendar";
import Schedule from "../../Components/Schedule/Schedule";
import { Spinner } from "../../Components/Spinner/Spinner";

import css from "./Main.module.css";

const Main = () => {
  const { loader } = useSelector((state) => state);
  return (
    <div className={css.main}>
      <Header />
      {!loader && <Spinner />}
      <Switch>
        <Route exact path="/" component={Сalendar} />
        {loader && <Route exact path="/schedule" component={Schedule} />}
      </Switch>
    </div>
  );
};

export default Main;
