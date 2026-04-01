export default function ProductCard({ product, handleAddCart }) {
  return (
    <div
      className="text-white p-5 bg-slate-400 rounded-md flex justify-between gap-4"
      key={product.code}
    >
      <div className="flex flex-col justify-between">
        <p>{product.name}</p>
        <h3 className="text-xl">${product.price}</h3>
        <p
          className={
            product.isAvailable === true
              ? "text-slate-600 font-bold"
              : "text-slate-300 font-bold"
          }
        >
          {product.isAvailable === true ? "Disponible" : "No disponible"}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => handleAddCart(product)}
          disabled={!product.isAvailable}
          className="bg-blue-500 px-4 py-2 rounded-md text-white cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}
