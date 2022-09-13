import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './itemListContainer.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import {DB} from "../Firebase/configs.js"


export default function ItemListContainer () {
  const [productsData, setProductsData] = useState([]);
  const { id } = useParams();
  const categoryId = !isNaN(id) && +id;

    useEffect(()=>{

      const coleRef = collection(DB, "Productos");
      
      if(categoryId){
        const  colFilterRef = query(coleRef, where('category', '==', categoryId))
        getDocs(colFilterRef)
        .then(res=> setProductsData(res.docs.map(res => ({id: res.id, ...res.data()})))
        )}else{
          getDocs(coleRef)
          .then(res=> setProductsData(res.docs.map(res => ({id: res.id, ...res.data()})))
          )
        };  
      
    },[categoryId]);

  

  /*return (
    <div>
      {Array.isArray(productsData) && productsData.length === 0 ? (
                <div className="waviy">
                  <span style={{'--i':'1'}}>Cargando </span>
                  <span style={{'--i':'2'}}>los </span>
                  <span style={{'--i':'3'}}>productos ... </span>
                </div>
            ) : (
                <ItemList products={productsData} />
            )}
    </div>
  )*/
}
