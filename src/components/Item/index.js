import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'
import Contador from '../Contador';
import Card from "react-bootstrap/Card";

const Item = ({id, nombre, precio, category, stock, imagen}) => {
    return(
        <Card className="col-3 m-2 p-7">
        <Card.Img
            variant="top"
            src={imagen}
            className="img-fluid"
        />
        <Card.Body>
            <Card.Title>
                <h1>{nombre}</h1>
                <h5>{category}</h5>
            </Card.Title>
            <Card.Text className="fw-bold fs-3">${precio}</Card.Text>
            <div className="text-center">                                
            <Link to={`/detail/${id}`}>
                <button type="button" className="btn btn-outline-dark">
                    Detalle
                </button>
            </Link>
            </div>
            <div className="container-fluid">
                <div className="row">
                        <Contador stock={stock} inicial={0} />
                        <button type="button" className="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </Card.Body>
    </Card>
    );
}

export default Item