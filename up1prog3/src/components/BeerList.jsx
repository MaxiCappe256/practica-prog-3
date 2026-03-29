export default function BeerList({ beers, dolar }) {
  const beersInPesos = beers.map((beer) => ({
    ...beer,
    price: beer.price * dolar,
  }));
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <h2 className="text-white text-3xl uppercase">Lista de cervezas:</h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {beersInPesos.map((beer) => (
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
              <span className="uppercase  font-bold">Precio: {beer.price}</span>
            </p>
            <p className="text-xl">
              <span className="uppercase  font-bold">Disponibilidad: </span>
              {beer.available === true ? "SI" : "NO"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
