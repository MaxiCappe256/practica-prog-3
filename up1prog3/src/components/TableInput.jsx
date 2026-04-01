export default function TableInput({ cantPatas, setCantPatas }) {
  const handleCantPatas = (e) => {
    setCantPatas(Number(e.target.value));
  };

  return (
    <input
      type="number"
      placeholder="Ej: 2..."
      value={cantPatas}
      onChange={handleCantPatas}
      className="bg-slate-500 px-4 py-2 rounded-md mt-3"
      min={1}
    ></input>
  );
}
