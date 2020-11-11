import React from "react";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import EpisodesListItem from "../EpisodesListItem/EpisodesListItem";

import css from "./EpisodesList.module.css";
import listTransition from "./ListTransition.module.css";

const EpisodesList = ({ episodesToRender }) => {
  const currentDate = useSelector((state) => state.date);
  const booleanForIn = !!episodesToRender;
  return (
    <div className={css.list__wrapper}>
      <h3>{currentDate}</h3>
      <TransitionGroup component="ul" className={css.list}>
        {episodesToRender.map((item) => (
          <CSSTransition
            in={booleanForIn}
            key={item.id}
            timeout={250}
            classNames={listTransition}
          >
            <EpisodesListItem item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default EpisodesList;
