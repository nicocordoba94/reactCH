import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export default function CartCustomContext({ children }) {
  const [cart, setCart] = useState([]);

  const addCartItem = (item) => {
    const listaActualizada = cart.find(
      (itemEnCarrito) => itemEnCarrito.id === item.id
    )
      ? cart.map((itemEnCarrito) => {
          if (itemEnCarrito.id === item.id) {
            return {
              ...itemEnCarrito,
              quantity: itemEnCarrito.quantity + item.quantity,
            };
          }
          return itemEnCarrito;
        })
      : [...cart, item];
    setCart(listaActualizada);
  };

  //funcion de vaciar carrito
  const eliminarTodo = () => {
    return cart.length >= 1 ? (
        <Button onClick={LimpiarCart} className="btn btn-warning w-25">
          Vaciar carrito
        </Button>
      ) : (
        " "
      );
    };

  //funcion de vaciar carrito
  const LimpiarCart = () => {
    return setCart([]);
  };

  //Funcion de quitar producto
  const eliminarProducto = (id) =>
    setCart(cart.filter((producto) => producto.id !== id));

  //Funcion de precio final
  const precioFinal = () => {
    return cart.length >= 1 ? (cart.reduce((prev, item) => prev + item.quantity * item.precio, 0)) : (
      " "
    );;
  };

  //Funcion total de productos
  const totalProductos = () => {
    return cart.reduce((prev, act) => prev + act.cantidad, 0);
  };

  //Funcion finalizar compra
  const finalizarCompra = () => {
    return cart.length >= 1 ? (
      <Button onClick={LimpiarCart} className="btn btn-success w-25">
        Finalizar Compra
      </Button>
    ) : (
      " "
    );
  };

  return (
    <CartContext.Provider
      value={{
        addCartItem,
        cartData: cart,
        eliminarTodo,
        LimpiarCart,
        eliminarProducto,
        precioFinal,
        cart,
        totalProductos,
        finalizarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}