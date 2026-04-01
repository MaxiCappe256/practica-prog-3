import Products from "./components/Products";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="bg-cyan-800 min-h-screen py-20">
      <Toaster
        position="top-center"
        richColors
        visibleToasts={1}
        toastOptions={{
          className:
            "text-xl font-semibold flex justify-center items-center text-center",
        }}
      />
      <Products />
    </div>
  );
}
