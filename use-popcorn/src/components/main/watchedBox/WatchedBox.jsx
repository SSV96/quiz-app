import React from "react";
import { useState } from "react";
import { tempWatchedData } from "../../../utils/movieData";

import Summary from "./Summary";
import WatchedMovieList from "./WatchedMovieList";
const WatchedBox = () => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && <Summary />}
    </div>
  );
};

export default WatchedBox;
