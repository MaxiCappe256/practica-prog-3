import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function MoovieCard({ movie, onDeleteClick }) {
  return (
    <Card className="w-72 shadow-lg hover:shadow-xl transition">
      <img
        src={movie.poster}
        alt={`Imagen pelicula: ${movie.title}`}
        className="w-full h-80 object-cover"
      />

      <CardHeader className="flex gap-2 justify-between items-center">
        <CardTitle>{movie.title}</CardTitle>

        <div className="flex items-center gap-2">
          {/* eliminar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 text-red-600 hover:scale-110 transition-all cursor-pointer "
            onClick={() => onDeleteClick(movie)}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
              clipRule="evenodd"
            />
          </svg>

          {/* ver detalle */}
          <Link to={`/cartelera/${movie.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 text-indigo-600 hover:scale-110 transition-all cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
        <p>
          <strong>Duración:</strong> {movie.duration}
        </p>
        <p>
          <strong>Clasificación:</strong> {movie.rating}
        </p>
      </CardContent>

      <CardFooter>
        <p>
          {movie.date} - {movie.time}
        </p>
        <p className="ml-1">{movie.cinemas[0]}</p>
      </CardFooter>
    </Card>
  );
}
