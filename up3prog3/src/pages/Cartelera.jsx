import MoovieCard from '@/components/MoovieCard';
import Navbar from '@/components/ui/Navbar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { useState } from 'react';

export default function Cartelera({ movies, onDelete }) {
  const [movieToDelete, setMovieToDelete] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleDeleteClick = (movie) => {
    setMovieToDelete(movie);
    setOpen(true);
  };

  const confirmDelete = () => {
    onDelete(movieToDelete.id);
    setOpen(false);
    setMovieToDelete(null);
  };

  const moviesSearch = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto">
        <h1 className="my-10 text-4xl font-bold uppercase text-gray-700 underline">
          Cartelera:
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center">
          {moviesSearch.length === 0 ? (
            <p>No hay peliculas...</p>
          ) : (
            moviesSearch.map((movie) => (
              <MoovieCard
                key={movie.id}
                movie={movie}
                onDeleteClick={handleDeleteClick}
              />
            ))
          )}
        </div>

        {/* Modal */}
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                ¿Eliminar {movieToDelete?.title}?
              </AlertDialogTitle>

              <AlertDialogDescription>
                Esta acción no se puede deshacer.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                Cancelar
              </AlertDialogCancel>

              <AlertDialogAction
                className="cursor-pointer"
                onClick={confirmDelete}
              >
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
