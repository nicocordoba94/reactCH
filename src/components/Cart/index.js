import React from "react";
import { useCartContext } from "../CartContext";
import CartItem from "../CartItem";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

export default function Cart() {
  const { cartData, precioFinal, finalizarCompra, eliminarTodo } =
    useCartContext();

  const order = {
    buyer: {
      name: "Nicolas Rodriguez",
      email: "nrodriguez@gmail.com",
      phone: "228548454",
      address: "independencia 1256",
    },
    items: cartData.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      precioUnitario: producto.precio,
      cantidad: producto.quantity,
      subtotal: producto.precio * producto.quantity,
    })),
    total: precioFinal(),
  };

  const generarCompra = () => {
    const dataBase = getFirestore();
    const ordersCollection = collection(dataBase, "orders");
    addDoc(ordersCollection, order).then(({ id }) =>
      alert(`Sus plegarias han sido escuchadas. Su numero de compra es: ${id}`)
    );
    eliminarTodo();
    cartData.forEach((item) => {
      const itemRef = doc(dataBase, "Productos", item.id);
      updateDoc(itemRef, {
        stock: increment(-item.quantity),
      });
    });
  };

  return (
    <div className="d-flex row justify-content-evenly">
      <h3 className="invocados-carrito">Pedido:</h3>
      <div className="d-flex justify-content-center card-group">
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
          : <h3 className="display-3 text-right">No hay ningun producto agregado al carrito!</h3>}
      </div>
      <form>
        <div className="row">
          <div className="col">
            <input required
              type="text"
              className="form-control m-1"
              placeholder="Nombre" 
            />
          </div>
          <div className="col">
            <input required
              type="text"
              className="form-control m-1"
              placeholder="Apellido" 
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input required
              type="email"
              className="form-control m-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingrese su correo electronico" 
            ></input>
          </div>
          <div className="col">
          <input required
              type="email"
              className="form-control m-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Repita su correo electronico" 
            ></input>
          </div>
        </div>
        <small id="emailHelp" className="form-text text-muted">
          *No compartiremos tus datos con nadie.
        </small>
      </form>
      <div className="d-flex row justify-content-evenly">
        <h4 className="cartTotal">Monto total: ${precioFinal()}</h4>
        <div className="justify-content-evenly">
          <span>
            <Button as={Link} to="/" className="btn btn-info w-25">
              Continuar comprando
            </Button>
          </span>
          <span className="m-5"> {eliminarTodo()} </span>
          <span onClick={generarCompra}> {finalizarCompra()} </span>
        </div>
      </div>
    </div>
  );
}