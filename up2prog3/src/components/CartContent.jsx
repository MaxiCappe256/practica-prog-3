export default function CartContent({ itemCart, handleRemoveCart }) {
  return (
    <div
      className="p-4 text-xl mt-5 bg-slate-300 rounded-md flex justify-between items-center"
      key={itemCart.code}
    >
      <p>{itemCart.name}</p>
      <p className="font-bold">${itemCart.price}</p>

      <button
        onClick={() => handleRemoveCart(itemCart)}
        className="bg-slate-500 text-black border-white font-bold  px-4 py-2 rounded-md cursor-pointer"
      >
        -
      </button>
    </div>
  );
}
