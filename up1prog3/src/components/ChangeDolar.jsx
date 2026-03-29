import { useState } from "react";

export default function ChangeDollar({ dolar, setDolar }) {
  const handleChange = (e) => {
    setDolar(Number(e.target.value));
  };

  const [visibilityPrice, setVisibilityPrice] = useState(false);

  const handleVisibility = (visibilityPrice) => {
    if (visibilityPrice) {
      setVisibilityPrice(false);
    } else {
      setVisibilityPrice(true);
    }
  };

  return (
    <div className=" w-fit mx-auto justify-center gap-4 items-center mx-70 shadow-white text-whitemt-5 px-4 py-2 rounded-md bg-slate-600">
      <button
        className=" bg-slate-500 px-4 transition-all py-2 rounded-md text-white"
        onClick={() => handleVisibility(visibilityPrice)}
      >
        Mostrar/Ocultar Precio
      </button>

      {visibilityPrice ? (
        <label className="flex gap-2 items-center text-white">
          1 USD =
          <input
            type="number"
            min="0"
            placeholder="Valor..."
            value={dolar}
            onChange={handleChange}
            className="border rounded-md px-2 py-1"
          />
          ARS
        </label>
      ) : null}
    </div>
  );
}
