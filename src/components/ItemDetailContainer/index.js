import React from 'react'
import { useEffect, useState } from 'react';
import { getProductById } from '../Products/asyncmock'
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {productId} = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product.find((obj)=>obj.id==productId))
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer