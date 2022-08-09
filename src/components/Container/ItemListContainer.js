/*import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import Contador from '../Contador';
import getFetch from "../Products/asyncmock";
import "./item.css"

export default function ItemListContainer() {

    function descItem() {
        return alert("Cargando...");
    }
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((resp) => setData(resp))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="d-flex row col-12 m-1 p-1 justify-content-evenly">
            {loading ? (

                <h3 className="text-dark text-center">
                    Cargando pagina...
                </h3>
            ) : (
                Data.map((prod) => (
                    <Card key={prod.id} className="col-3 m-2 p-7">
                        <Card.Img
                            variant="top"
                            src={prod.imagen}
                            className="img-fluid"
                        />
                        <Card.Body>
                            <Card.Title>
                                {prod.nombre}
                            </Card.Title>
                            <Card.Text className="fw-bold fs-3">${prod.precio}</Card.Text>
                            <div className="text-center">
                                <button type="button" className="btn btn-outline-dark" onClick={descItem}>
                                    Detalle
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    
                                        <Contador stock={prod.stock} inicial={0} />
                                        <button type="button" className="btn btn-primary mt-2">Agregar al carrito</button>
                                    
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
}

/*function ItemListContainer(props){

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://delta.com.ar/media/catalog/product/cache/dcfa4d7d2f407766967fe41942d9a0cc/a/c/acer-nitro-5_an515-55_modelmain.png" alt="imagen notebook" width="250px"/>
      <Card.Body>
        <Card.Title className='nom'>{props.nombre}</Card.Title>
        <Card.Text className='des'>
          {props.descripcion}
        </Card.Text>
        <Button variant="primary">Agregar</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;*/


