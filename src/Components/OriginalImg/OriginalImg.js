import React from "react";
import css from "./OriginalImg.module.css";

const originalImg = ({ originalImg, setImgToogler }) => {
  const handlerClose = () => {
    setImgToogler((state) => !state);
  };
  return (
    // <div className={css.wrapper}>
    <img
      className={css.wrapper}
      src={`${originalImg}`}
      alt=""
      onClick={handlerClose}
    />
    // </div>
  );
};

export default originalImg;
