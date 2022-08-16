import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getProductById } from '../Products/asyncmock'
import ItemDetail from '../ItemDetail';


export default function ItemDetailContainer() {
    const { id } = useParams();
    const productId = !isNaN(id) && +id;

    const [productData, setProductData] = useState({});
    useEffect(() => {
        setProductData({});
        const productDataPromise = getProductById(productId);
        productDataPromise.then(
            (data) => {
                setProductData(data);
            },
            (err) => {
                console.log(
                    "Ha ocurrido un error al buscar la info del Producto: ",
                    err
                );
            }
        );
    }, []);
    return (
        <div>
            {productData && productData.id ? (
                <ItemDetail {...productData} />
            ) : (
                <div className="loading">Cargando detalle del producto...</div>
            )}
        </div>
    )
}
