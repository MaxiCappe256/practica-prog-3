export default function Persons({ names }) {
  const filteredNames = names.filter((name) => name.includes("P"));
  console.log(filteredNames);

  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h2 className="text-white underline mb-4 text-center font-bold text-2xl mt-5">
        PRACTICA ADD EJ 2:
      </h2>{" "}
      <div className="flex flex-row gap-4 justify-center items-center">
        {filteredNames.map((name) => (
          <h3 key={name} className="text-white text-xl">
            {name}
          </h3>
        ))}
      </div>
    </div>
  );
}
