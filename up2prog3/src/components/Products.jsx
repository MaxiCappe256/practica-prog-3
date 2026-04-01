import { useState } from "react";
import { allProducts } from "../api/products.api";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { toast } from "sonner";

export default function Products() {
  const [cart, setCart] = useState([]);

  const handleAddCart = (product) => {
    const exists = cart.find((p) => p.code === product.code);

    if (exists) {
      toast.error(`Producto ${product.name} ya se encuentra en el carrito`);
      return;
    }

    setCart((prev) => [...prev, product]);
    toast.success(`Producto ${product.name} agregado`);
  };

  const handleRemoveCart = (product) => {
    const newCart = cart.filter((p) => p.code !== product.code);
    setCart(newCart);
    toast.success(`Producto ${product.name} Eliminado`);
  };

  const handleComprar = () => {
    setCart([]);
    toast.success("Comprando...");
  };

  return (
    <div className="flex mx-auto px-30 justify-between gap-15">
      <div className="w-[80vw]">
        <h1 className="text-3xl text-white uppercase underline">Productos:</h1>

        <div className="grid grid-cols-4 gap-8 mt-5 text-xl">
          {allProducts.map((product) => (
            <ProductCard
              key={product.code}
              product={product}
              handleAddCart={handleAddCart}
            />
          ))}
        </div>
      </div>

      <div className="w-[20vw]">
        <Cart
          cart={cart}
          handleRemoveCart={handleRemoveCart}
          handleComprar={handleComprar}
        />
      </div>
    </div>
  );
}
