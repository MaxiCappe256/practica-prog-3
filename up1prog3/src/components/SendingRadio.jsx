export default function SendingRadio({ shippingType, setShippingType }) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center mt-3">
      <label className="flex gap-2">
        <input
          type="radio"
          name="shipping"
          value="local"
          checked={shippingType === "local"}
          onChange={(e) => setShippingType(e.target.value)}
          className="cursor-pointer"
        />
        Retiro en local
      </label>

      <label className="flex gap-2">
        <input
          type="radio"
          name="shipping"
          value="express"
          checked={shippingType === "express"}
          onChange={(e) => setShippingType(e.target.value)}
          className="cursor-pointer"
        />
        Envío express
      </label>

      <label className="flex gap-2">
        <input
          type="radio"
          name="shipping"
          value="comun"
          checked={shippingType === "comun"}
          onChange={(e) => setShippingType(e.target.value)}
          className="cursor-pointer"
        />
        Envío común
      </label>
    </div>
  );
}
