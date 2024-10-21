import React from "react";
import ListBox from "./movieList/Box";
import WatchedBox from "./watchedBox/WatchedBox";

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
