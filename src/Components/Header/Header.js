import React from "react";
import { useHistory, useLocation } from "react-router";

import css from "./Header.module.css";

const Header = () => {
  const history = useHistory();
  const location = useLocation();

  const handleGoBack = () => {
    history.push("/");   
  };

  return (
    <div className={css.header}>
      <h2 className={css.header__title}>SUPER FILM</h2>
      {location.pathname === "/schedule" && (
        <button className={css.header__goback_btn} onClick={handleGoBack} />
      )}
    </div>
  );
};

export default Header;
