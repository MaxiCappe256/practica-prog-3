export default function BeerStyles({ beers }) {
  const beersStylesRepeated = beers.map((beer) => beer.beerStyle);

  const uniqueStyles = [];

  beersStylesRepeated.forEach((style) => {
    if (!uniqueStyles.includes(style)) {
      uniqueStyles.push(style);
    }
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-white text-3xl uppercase">Estilos de cervezas:</h2>
      <ul className="flex gap-4 mt-2">
        {uniqueStyles.map((style) => (
          <li key={style} className="text-white text-xl">
            {style}
          </li>
        ))}
      </ul>
    </div>
  );
}
