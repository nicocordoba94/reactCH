import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Contador({ onAddItemsToCart, stock, inicial }) {
    const [selectedNumItems, setSelectedNumItems] = useState(Number(inicial));

    const onAdd = () => {
        onAddItemsToCart(selectedNumItems);
    }
    const agregarAlContador = () => {
        if (selectedNumItems < stock) {
            setSelectedNumItems(selectedNumItems + 1);
        }
        else {
            alert(`Por el momento solo tenemos ${stock} unidades de este producto`);
        }
    }
    const restarAlContador = () => {
        if (selectedNumItems > 1) {
            setSelectedNumItems(selectedNumItems - 1);
        }
    }


    return (
        <div>
            <div className="d-flex flex-row justify-content-center mt-2">
                <button className="btn btn-outline-info p-2 boton-cant" onClick={restarAlContador}>-</button>
                <p className="p-2">
                    {selectedNumItems}
                </p>
                <button className="btn btn-outline-info p-2 boton-cant" onClick={agregarAlContador}>+</button>
            </div>
            <div className="container-fluid">
                <div className="row">
            <Button type="button" className="btn btn-primary" onClick={onAdd} >Agregar al carrito</Button>
            </div>
            </div>
        </div>
    )
}