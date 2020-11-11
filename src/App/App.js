import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "../Containers/Main/Main";
import NotFound from "../Containers/NotFound/NotFound";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.app}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/schedule" component={Main} />
        <Route component={NotFound}/>
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
}

export default App;
