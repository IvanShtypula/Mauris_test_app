import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import EpisodesList from "../EpisodesList/EpisodesList";

import css from "./Schedule.module.css";

const Schedule = () => {
  const scheduleList = useSelector((state) => state.schedule);
  const [episodesToShow, setEpisodesToShow] = useState([]);
  const episodesPerPage = 2;
  let arrayForEpisodes = [];
  const ref = useRef(episodesPerPage);

  const loopWithSlice = (start, end) => {
    const slicedEpisodes = scheduleList.slice(start, end);
    arrayForEpisodes = arrayForEpisodes.concat(slicedEpisodes);
    setEpisodesToShow(arrayForEpisodes);
  };

  useEffect(() => {
    loopWithSlice(0, episodesPerPage);
  }, []);

  const showMoreEpisodes = () => {
    loopWithSlice(0, ref.current + episodesPerPage);
    ref.current += episodesPerPage;
  };

  return (
    <div className={css.schedule}>
      <EpisodesList episodesToRender={episodesToShow} />
      <button className={css.schedule__loadmore_btn} onClick={showMoreEpisodes}>
        Еще 2 сериала
      </button>
    </div>
  );
};

export default Schedule;
