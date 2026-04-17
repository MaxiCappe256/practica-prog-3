import MovieForm from "@/components/MovieForm";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import { Link } from "react-router";

export default function NewMovie({ addMovie }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Link to="/">
        <Button className="absolute left-5 top-23 cursor-pointer">
          Volver
        </Button>
      </Link>

      <div className="flex flex-1 flex-col items-center justify-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold my-10 text-gray-700">
          Nueva Pelicula:
        </h1>
        <MovieForm addMovie={addMovie} />
      </div>
    </div>
  );
}
