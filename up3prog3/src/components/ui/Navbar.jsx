import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Input } from './input';
import { Link } from 'react-router';

export default function Navbar({ search, setSearch }) {
  return (
    <div className="bg-gray-700 text-white py-4 sticky top-0 shadow-md">
      <NavigationMenu className="flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/cartelera"
          className="text-3xl cursor-pointer font-bold hover:scale-105 transition-all"
        >
          Cartelera - Rosario
        </Link>

        <NavigationMenuList>
          <NavigationMenuItem className="flex gap-2">
            <Link to="/cartelera">
              <NavigationMenuLink className="hover:bg-slate-300 cursor-pointer hover:text-black transition-all">
                Inicio
              </NavigationMenuLink>
            </Link>
            <Link to="/cartelera/new">
              <NavigationMenuLink className="hover:bg-slate-300 cursor-pointer hover:text-black transition-all">
                Nueva cartelera
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <Input
          type="text"
          className="w-50 text-white"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Busca tu pelicula..."
        />
      </NavigationMenu>
    </div>
  );
}
