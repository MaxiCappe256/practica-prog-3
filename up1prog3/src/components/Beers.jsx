import { useState } from "react";
import BeerList from "./BeerList";
import BeerListAvailable from "./BeerListAvailable";
import BeersRedIpaCounter from "./BeersRedIpaCounter";
import BeerStyles from "./BeerStyle";
import ChangeDollar from "./ChangeDolar";
import NewBeer from "./NewBeer";

export default function Beers() {
  const beersData = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

  const [dolar, setDolar] = useState(1400);
  const [beers, setBeers] = useState(beersData);

  return (
    <div className="pt-15">
      <h2 className="text-white underline mb-4 text-center font-bold text-2xl">
        EJERCICIO 1:
      </h2>
      <BeerList beers={beers} dolar={dolar} />

      <div className="h-[2px] w-[80vw] mx-auto mt-10 bg-slate-100"></div>

      <h2 className="text-white underline mb-4 text-center font-bold text-2xl mt-5">
        EJERCICIO 2:
      </h2>
      <BeerListAvailable beers={beers} />

      <div className="h-[2px] w-[80vw] mx-auto mt-10 bg-slate-100"></div>

      <h2 className="text-white underline mb-4 text-center font-bold text-2xl mt-5">
        EJERCICIO 3:
      </h2>
      <BeersRedIpaCounter beers={beers} />

      <div className="h-[2px] w-[80vw] mx-auto mt-10 bg-slate-100"></div>

      <h2 className="text-white underline mb-4 text-center font-bold text-2xl mt-5">
        EJERCICIO 4:
      </h2>
      <BeerStyles beers={beers} />

      <div className="h-[2px] w-[80vw] mx-auto mt-10 bg-slate-100"></div>

      <ChangeDollar dolar={dolar} setDolar={setDolar} />

      <NewBeer beers={beers} setBeers={setBeers} />
    </div>
  );
}
