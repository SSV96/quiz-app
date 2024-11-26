import NavBar from "./components/NavBar";
import MovieList from "./components/main/movieList/MovieList";
import SearchBar from "./components/SearchBar";
import Box from "./components/main/movieList/Box";
import WatchedBox from "./components/main/watchedBox/WatchedBox";
import NumResults from "./components/NumResults";
import Main from "./components/main/Main";
import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./utils/movieData";
import Summary from "./components/main/watchedBox/Summary";
import WatchedMovieList from "./components/main/watchedBox/WatchedMovieList";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar movies={movies} setMovies={setMovies}>
        <SearchBar />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <Summary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
