
/*import React from 'react'
import Item from "../Item";

const ItemDetail = ({products}) => {
    return (
        <div className="d-flex row col-12 m-1 p-1 justify-content-evenly">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div> 
    )
}

export default ItemDetail*/
import React from "react";
import { Button } from "react-bootstrap";
import "./ItemDetail.css";
import { getProducts, getProductsByCategory, getProductById } from '../Products/asyncmock'

const ItemDetail = (products) => {
    return (
    <>
        <img src={products.imagen} alt="" className="imagen"></img>
        <div className="detalles d-flex row col-12 m-1 p-1 justify-content-evenly">
            <div className="descripcion">
                <h2 style={{ textAlign: "center" }}>{products.titulo}</h2>

            </div>
        <div className="lastCont">
            <div className="precio">$ {products.precio}</div>
            <Button className="btn-dark btnBuy">Comprar</Button>
        </div>
        </div>
    </>
    );
};

export default ItemDetail;