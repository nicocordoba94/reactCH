import React from 'react';
import Logo from './deltaLogo.svg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemListContainer(props){

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

export default ItemListContainer;


/*function ItemListContainer(props){
    return(
        <div className='item'>
            <div className='img'>
                <img src={Carrito} alt="carrito" width="50px"></img>
            </div>
            <div className='nom'>
                <p>{props.nombre}</p>
            </div>
            <div className='des'>
                <p>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default ItemListContainer;*/