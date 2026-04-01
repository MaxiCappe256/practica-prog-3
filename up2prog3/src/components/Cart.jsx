import { useState } from "react";
import CartContent from "./CartContent";

export default function Cart({ cart, handleRemoveCart, handleComprar }) {
  const total = cart.reduce(
    (acumulador, producto) => acumulador + producto.price,
    0,
  );

  return (
    <div>
      <h2 className="text-3xl text-white uppercase underline"> Carrito:</h2>

      {cart.length === 0 ? (
        <p className="text-xl text-red-400 font-bold mt-5">
          No hay productos...
        </p>
      ) : (
        <div className="flex flex-col">
          {cart.map((itemCart) => (
            <CartContent
              itemCart={itemCart}
              handleRemoveCart={handleRemoveCart}
            />
          ))}
          <div className="mt-5">
            <p className="border px-4 py-2 rounded-md text-center text-2xl mt-5 text-white">
              Total: <span className="font-bold">${total}</span>
            </p>

            <button
              onClick={handleComprar}
              className="bg-sky-300 w-full text-xl mt-5 cursor-pointer px-4 py-2 rounded-md transition-all hover:scale-105 uppercase text-slate-700 font-bold"
            >
              Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
