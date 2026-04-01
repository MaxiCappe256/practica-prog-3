import React, { useState } from "react";
import TableInput from "./TableInput";

export default function TableForm() {
  const [cantPatas, setCantPatas] = useState(null);
  return (
    <div className="max-w-5xl mx-auto text-center mt-10 text-white">
      <h2 className="text-xl">Ingrese la cantidad de patas que tendra la mesa:</h2>
      <p className={cantPatas === 4 ? "text-green-500" : "text-red-500"}>{cantPatas === 4 ? "Mesa correcta" : "Mesa inestable"}</p>
      <TableInput cantPatas={cantPatas} setCantPatas={setCantPatas} />
    </div>
  );
}
