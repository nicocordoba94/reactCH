import React from 'react'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../Products/asyncmock'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {

        if(!categoryId){
        getProducts().then(products => {
            setProducts(products)
            })
        }
        else{
        getProductsByCategory(categoryId).then(products => {
            setProducts(products)
        })
        }
        
    }, [categoryId])
    

    return (
        <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer