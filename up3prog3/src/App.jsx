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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/cartelera"
          element={<Cartelera movies={movies} onDelete={deleteMovie} />}
        />
        <Route
          path="/cartelera/:movieId"
          element={<MovieDetail movies={movies} />}
        />
        <Route
          path="/new"
          element={<NewMovie movies={movies} setMovies={setMovies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
