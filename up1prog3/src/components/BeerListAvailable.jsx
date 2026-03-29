export default function BeerListAvailable({ beers }) {
  const availableBeers = beers.filter((beer) => beer.available);
  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-5">
      <h2 className="text-white text-3xl uppercase">
        Lista de cervezas disponibles:
      </h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {availableBeers.map((beer) => (
          <div className="rounded-md bg-slate-300 p-4" key={beer.id}>
            <p className="text-xl">
              <span className="uppercase  font-bold">Nombre: </span>
              {beer.beerName}
            </p>
            <p className="text-xl">
              <span className="uppercase  font-bold">Estilo: </span>
              {beer.beerStyle}
            </p>
            <p className="text-xl">
              <span className="uppercase  font-bold">Precio: </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
