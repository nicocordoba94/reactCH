import React, { memo } from 'react'
import Card from "react-bootstrap/Card";
import { useCartContext } from '../CartContext';
import Button from 'react-bootstrap/Button'


const CartItem = ({ id, quantity, nombre, imagen, precio }) => {
    const { eliminarProducto } = useCartContext();


  return (
    <div >
        <Card className="col-13 m-2 p-1">
        <Card.Img
            variant="top"
            src={imagen}
            className="img-fluid"
        />
        <Card.Body>
            <Card.Title>
                <h3>Cantidad: {quantity}</h3>
                <h4>{nombre}</h4>
            </Card.Title>
            <Card.Text className="fw-bold fs-3">${precio}</Card.Text>
            <Button variant="danger" onClick={() => eliminarProducto(id)}>Quitar Producto</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;