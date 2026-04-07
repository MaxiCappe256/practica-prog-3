import MoovieCard from '@/components/MoovieCard';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/Navbar';
import { Link, useParams } from 'react-router';

export default function MovieDetail({ movies }) {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === Number(movieId));

  return (
    <div>
      <Navbar />
      <Link to='/cartelera'>
        <Button className="mt-5 ml-5 cursor-pointer">Volver</Button>
      </Link>
      <div className="min-h-[calc(100vh-160px)] flex justify-center items-center">
        <div className="max-w-xl ">
          <MoovieCard movie={movie} />
        </div>
      </div>
    </div>
  );
}
