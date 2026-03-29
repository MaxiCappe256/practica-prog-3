//  - Crear un componente NewBeer que tenga un formulario para agregar una nueva
// cerveza.

import { useState } from "react";

export default function NewBeer({ beers, setBeers }) {
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      id: beers.length + 1,
      beerName: name,
      beerStyle: style,
      price: Number(price),
      available: Boolean(available),
    };

    setBeers([...beers, newBeer]);

    setName("");
    setStyle("");
    setPrice(0);
    setAvailable(false);
  };

  return (
    <div>
      <h2 className="text-white text-xl text-center my-5 underline">
        Agregar nueva cerveza:
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center justify-center"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-gray-800 px-4 py-2 rounded-md focus:outline-none bg-slate-300"
          type="text"
          placeholder="Nombre..."
        />
        <input
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="text-gray-800 px-4 py-2 rounded-md focus:outline-none bg-slate-300"
          type="text"
          placeholder="Estilo..."
        />
        <input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="text-gray-800 px-4 py-2 rounded-md focus:outline-none bg-slate-300"
          type="number"
          placeholder="Precio..."
        />
        <label className="flex items-center gap-3 text-white cursor-pointer">
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            className="w-5 h-5 accent-indigo-500 rounded-md"
          />
          <span>Disponible</span>
        </label>

        <button className="bg-indigo-600 px-4 py-2 rounded-md text-white cursor-pointer mt-2 hover:scale-105 transition-all shadow-xl">
          Enviar
        </button>
      </form>
    </div>
  );
}
