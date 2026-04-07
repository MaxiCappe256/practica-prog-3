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

export default function MovieForm() {
  return (
    <form className="p-6 bg-gray-700 text-white rounded-md shadow-md flex flex-col gap-3">
      <div className="flex gap-5">
        <Label className="text-xl w-[30%]">Titulo:</Label>
        <Input
          type="text"
          className="flex-1"
          placeholder="Ej: Argentina, 1985..."
        />
      </div>

      <div className="flex gap-5">
        <Label className="text-xl w-[30%]">Director:</Label>
        <Input
          type="text"
          className="flex-1"
          placeholder="Ej: Santiago Mitre..."
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
            <SelectItem value="cairo">El Cairo</SelectItem>
            <SelectItem value="showcase">Showcase Rosario</SelectItem>
            <SelectItem value="centro">Cines del centro</SelectItem>
            <SelectItem value="cinemark">Cinemark Hoyts</SelectItem>
            <SelectItem value="tipas">Las Tipas</SelectItem>
            <SelectItem value="monumental">Nuevo Monumental</SelectItem>
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
