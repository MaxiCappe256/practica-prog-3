export default function BeersRedIpaCounter({ beers }) {
  const countIpa = beers.filter((beer) => beer.beerStyle === "IPA").length;
  const countRed = beers.filter((beer) => beer.beerStyle === "Red").length;

  return (
    <div className="flex flex-col gap-6 items-center justify-center text-white text-xl">
      <h2 className="text-white text-3xl uppercase">
        Contador de cevezas IPA y RED:
      </h2>

      <div className="flex flex-row gap-4 border rounded-md p-2 bg-slate-700">
        <p>Contador IPA: {countIpa}</p>
        <p>Contador Red: {countRed}</p>
      </div>
    </div>
  );
}
