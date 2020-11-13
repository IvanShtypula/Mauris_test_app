import React from "react";

import css from "./OriginalImg.module.css";

const originalImg = ({ originalImg, setImgToogler }) => {
  const handlerClose = () => {
    setImgToogler((state) => !state);
  };
  return (
    <>  
    <img
      className={css.image}
      src={`${originalImg}`}
      alt=""    
    />
    <div className={css.overlay} onClick={handlerClose}></div>
  </>
  );
};

export default originalImg;
