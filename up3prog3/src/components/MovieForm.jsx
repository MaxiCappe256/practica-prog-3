import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function MovieForm({ addMovie }) {
  const cines = [
    "El Cairo",
    "Showcase Rosario",
    "Cines del centro",
    " Cinemark Hoyts",
    "Las Tipas",
    "Nuevo Monumental",
  ];

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    duration: "",
    rating: "",
    sinopsis: "",
    cinemas: [],
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // validaciones
    setFormData({
      title: formData.title,
      director: formData.director,
      duration: formData.duration,
      rating: formData.rating,
      sinopsis: formData.sinopsis,
      cinemas: formData.cinemas,
      date: formData.date,
      time: formData.time,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="p-6 bg-gray-700 text-white rounded-md shadow-md flex flex-col gap-3">
      <div className="flex gap-5">
        <Label className="text-xl w-[30%]">Titulo:</Label>
        <Input
          type="text"
          className="flex-1"
          placeholder="Ej: Argentina, 1985..."
          onChange={handleChange}
          name={formData.director}
        />
      </div>

      <div className="flex gap-5">
        <Label className="text-xl w-[30%]">Director:</Label>
        <Input
          type="text"
          className="flex-1"
          placeholder="Ej: Santiago Mitre..."
          onChange={handleChange}
          name={formData.director}
        />
      </div>

      <div className="flex gap-5">
        <Label className="text-xl w-[30%]">Duracion:</Label>
        <Input type="number" className="flex-1" placeholder="Ej: 140..." />
      </div>

      <div className="flex gap-5">
        <Label className="text-xl w-[30%]">Imagen:</Label>
        <Input
          type="text"
          className="flex-1"
          placeholder="Link de la imagen..."
        />
      </div>

      <div className="flex gap-5">
        <Label className="text-xl w-[30%]">Cine:</Label>
        <Select>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Seleccionar cine" />
          </SelectTrigger>

          <SelectContent className="p-2">
            {cines.map((cine) => (
              <SelectItem key={cine} value={cine}>
                {cine}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="w-full text-xl border border-gray-700 bg-white text-black px-4 py-5 mt-5 cursor-pointer font-bold shadow-md"
      >
        Agregar
      </Button>
    </form>
  );
}
