import React from 'react'
import Item from "../Item";

const ItemList = ({products}) => {
    return (
        <div className="d-flex row col-12 m-1 p-1 justify-content-evenly">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div> 
        )
} 

export default ItemList