import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


export default function CartWidget () {

  const { totalProductos } = useCartContext();
    return (
        <Nav.Link as={Link} to={`/cart`} >
        <FaShoppingCart />
        <span className='cartcant'>{ totalProductos() || "0"}</span> 
        </Nav.Link>
    );
}