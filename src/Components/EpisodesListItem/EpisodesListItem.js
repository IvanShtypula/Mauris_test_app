import React, { useState } from "react";
// import { useSelector } from "react-redux";

import OriginalImg from "../OriginalImg/OriginalImg"

import css from "./EpisodesListItem.module.css";

const EpisodesListItem = ({ item }) => {
  const [imgToogler, setImgToogler] = useState(false)
  const openOriginalImg = () => {
    setImgToogler((state) => !state)
  };
  return (
    <>
      <li className={css.listItem}>
        {imgToogler && <OriginalImg originalImg={item.show.image.original} setImgToogler={setImgToogler}/>}
        <div className={css.listItem__imageWrapper}>
        {item.show.image ? (
          <img
            className={css.listItem__imageWrapper}
            src={`${item.show.image.medium}`}
            alt="clear"
            width="140"
            onClick={openOriginalImg}
          />
        ) : (
          <img
            className={css.listItem__imageWrapper}
            src="../../helpers/img/main.png"
            alt="clear"
            width="140"
          />
        )}
        </div>
        <div className={css.listItem__description}>
          <h4
            className={css.listItem__description_title}
          >{`${item.show.name}`}</h4>
          <span>{`${item.show.premiered.slice(0, 4)}`}</span>
          <div className={css.listItem__description_number}>
            <p>
              Сезон:<span>{`${item.season}`}</span>
            </p>
            <p>
              Эпизод:<span>{`${item.number}`}</span>
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default EpisodesListItem;
