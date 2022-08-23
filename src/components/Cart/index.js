import React from "react";
import { useCartContext } from "../CartContext";
import CartItem from "../CartItem";


export default function Cart() {
  const { cartData, precioFinal,finalizarCompra, eliminarTodo } = useCartContext();


  return (
    <div className="d-flex row justify-content-evenly">
      <h3>Carrito:</h3>
      <div className="card-group">
        {cartData.length > 0
          ? cartData.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  quantity={item.quantity}
                  nombre={item.nombre}
                  imagen={item.imagen}
                  precio={item.precio}
                />
              );
            })
          : "No has agregado ningun producto al carrito!"}
      </div>
      <div className="d-flex row justify-content-evenly">
        <h4 className="cartTotal">Monto total: ${precioFinal()}</h4>
        <div>
        <div> { eliminarTodo() } </div>
        <div> {finalizarCompra()} </div>
        </div>
      </div>
    </div>
  );
}