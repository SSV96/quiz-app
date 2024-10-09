import React from "react";
import ListBox from "./movieList/ListBox";
import WatchedBox from "./watchedBox/WatchedBox";

const Main = ({ movies }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
};

export default Main;
