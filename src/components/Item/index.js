import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'
import Card from "react-bootstrap/Card";

export default function Item ({id, nombre, precio, category, stock, imagen, estilo}) {
    return(
        <Card className="col-3 m-2 p-2">
        <Card.Img
            variant="top"
            src={imagen}
            className="img-fluid"
        />
        <Card.Body>
            <Card.Title>
                <h2>{nombre}</h2>
                <h4>{estilo}</h4>
            </Card.Title>
            <Card.Text className="fw-bold fs-3">${precio}</Card.Text>
            <div className="text-center">                                
            <Link to={`/item/${id}`}>
                <button type="button" className="btn btn-outline-dark">
                    Detalle
                </button>
            </Link>
            </div>
            <div className="container-fluid">

            </div>
        </Card.Body>
    </Card>
    );
}