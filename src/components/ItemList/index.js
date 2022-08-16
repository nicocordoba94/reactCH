import React from 'react'
import Item from "../Item";

export default function ItemList ({products}) {
    return (
      <div className="d-flex row col-12 justify-content-evenly">
        {Array.isArray(products) &&
                products.map((product) => {
                    return <Item key={product.id} {...product} />;
                })}
      </div> 
    )
  }
  