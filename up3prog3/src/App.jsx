import { BrowserRouter, Route, Routes } from "react-router";
import Cartelera from "./pages/Cartelera";
import { initialMovies } from "./data/movies";
import { useState } from "react";
import MovieDetail from "./pages/MovieDetail";
import NewMovie from "./pages/NewMovie";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const deleteMovie = (id) =>
    setMovies(movies.filter((movie) => movie.id !== id));

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Cartelera movies={movies} onDelete={deleteMovie} />}
        />
        <Route
          path="/cartelera/:movieId"
          element={<MovieDetail movies={movies} />}
        />
        <Route
          path="/new"
          element={<NewMovie addMovie={addMovie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
