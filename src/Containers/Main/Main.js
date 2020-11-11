import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";

import Header from "../../Components/Header/Header";
import Сalendar from "../../Components/Сalendar/Сalendar";
// import EpisodesList from "../../Components/EpisodesList/EpisodesList";
import Schedule from "../../Components/Schedule/Schedule"
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
        {/* <CSSTransition in={!loader} timeout={250}>
          <Route exact path="/schedule" component={Schedule} />
        </CSSTransition> */}
        {loader && <Route exact path="/schedule" component={Schedule} />}
        {/* <Redirect to="/" />       */}
      </Switch>
    </div>
  );
};

export default Main;
