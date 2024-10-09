import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import NumResults from "./components/NumResults";
import Main from "./components/main/Main";
import { useState } from "react";
import { tempMovieData } from "./utils/movieData";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies} setMovies={setMovies}>
        <Logo />
        <SearchBar />
        <NumResults movies={movies} />
      </NavBar>

      <Main movies={movies} setMovies={setMovies} />
    </>
  );
}
