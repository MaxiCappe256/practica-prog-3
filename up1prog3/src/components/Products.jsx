

export default function Products({ products }) {
  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h2 className="text-white underline mb-4 text-center font-bold text-2xl mt-5">
        PRACTICA ADD EJ 1:
      </h2>
      <div className="flex flex-row gap-4">
        {products.map((name) => (
          <h3 className="text-white text-xl" key={name}>
            {name}
          </h3>
        ))}
      </div>
    </div>
  );
}
