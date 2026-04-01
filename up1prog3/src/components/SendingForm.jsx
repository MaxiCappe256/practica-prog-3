import { useState } from "react";
import SendingRadio from "./SendingRadio";

export default function SendingForm() {
  const [shippingType, setShippingType] = useState(null);
  return (
    <div className="mx-auto max-w-5xl text-white text-center mt-10">
      <h2 className="text-xl">Seleccione el tipo de envio:</h2>
      {shippingType && (
        <p
          className={
            shippingType === "local" ? "text-green-500" : "text-red-500"
          }
        >
          {shippingType === "local" ? "No hay recargo" : "Tendra recargo"}
        </p>
      )}
      <SendingRadio
        shippingType={shippingType}
        setShippingType={setShippingType}
      />
    </div>
  );
}
