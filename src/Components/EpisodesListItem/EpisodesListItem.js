import React, { useState } from "react";

import OriginalImg from "../OriginalImg/OriginalImg";

import css from "./EpisodesListItem.module.css";

const EpisodesListItem = ({ item }) => {

  const [imgToogler, setImgToogler] = useState(false);
  const openOriginalImg = () => {
    setImgToogler((state) => !state);
  };
  return (
    <>
      <li className={css.listItem}>
        {imgToogler && (
          <OriginalImg
            originalImg={item.show.image.original}
            setImgToogler={setImgToogler}
          />
        )}     
        {item.show.image ? (
          <img
            className={css.listItem__imageWrapper}
            src={`${item.show.image.medium}`}
            alt="empty"
            width="140"
            onClick={openOriginalImg}
          />
        ) : (
          <div className={css.listItem__alterImg}></div>
        )}

        <div className={css.listItem__description}>
          <h4
            className={css.listItem__description_title}
          >{`${item.show.name}`}</h4>
          <span className={css.listItem__premiered}>{`${item.show.premiered.slice(0, 4)}`}</span>
          <div className={css.listItem__description_season}>
            <p>
              Сезон: <span>{`${item.season}`}</span>
            </p>
            <p>
              Эпизод: <span>{`${item.number}`}</span>
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default EpisodesListItem;
