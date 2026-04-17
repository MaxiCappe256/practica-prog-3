import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Input } from "./input";
import { Link } from "react-router";
import { useState } from "react";

export default function Navbar({ search, setSearch }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gray-700 text-white py-4 sticky top-0 shadow-md relative">
      <NavigationMenu className="flex justify-between items-center max-w-7xl mx-auto px-5 xl:p-0 md:p-0">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl cursor-pointer font-bold hover:scale-105 transition-all"
        >
          Cartelera - Rosario
        </Link>

        {/* Links */}
        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem className="flex gap-2">
            <Link to="/">
              <NavigationMenuLink className="hover:bg-slate-300 hover:text-black">
                Inicio
              </NavigationMenuLink>
            </Link>

            <Link to="/new">
              <NavigationMenuLink className="hover:bg-slate-300 hover:text-black">
                Nueva pelicula
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Mobile menu */}
        <div
          className={`${showMenu ? "flex" : "hidden"} border-t-1 flex-col justify-center items-center absolute top-full left-0 w-full bg-gray-700 p-6 gap-4 md:hidden`}
        >
          <Link to="/cartelera">Inicio</Link>
          <Link to="/new">Nueva pelicula</Link>

          <Input
            type="text"
            className="w-50 text-white  xl:hidden md:hidden"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Busca tu pelicula..."
          />
        </div>

        {/* Buscador */}
        <Input
          type="text"
          className="w-50 text-white hidden xl:block md:block"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Busca tu pelicula..."
        />

        {/* Icon celu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute right-5 md:hidden"
          onClick={handleToggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </NavigationMenu>
    </div>
  );
}
