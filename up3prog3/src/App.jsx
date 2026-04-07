import { BrowserRouter, Route, Routes } from 'react-router';
import Cartelera from './pages/Cartelera';
import { initialMovies } from './data/movies';
import { useState } from 'react';
import MovieDetail from './pages/MovieDetail';
import NewCartelera from './pages/NewCartelera';

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
          path="/cartelera/new"
          element={<NewCartelera movies={movies} setMovies={setMovies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
