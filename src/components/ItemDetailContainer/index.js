import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";


export default function ItemDetailContainer() {

    const [productData, setProductData] = useState();
    const {id} = useParams();
    
    useEffect(() => {
        const queryDatabase = getFirestore ()
        const queryDoc = doc(queryDatabase, 'Productos', id)
        getDoc(queryDoc)
        .then(res => setProductData({id:res.id, ...res.data()}))

    }, [id])


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