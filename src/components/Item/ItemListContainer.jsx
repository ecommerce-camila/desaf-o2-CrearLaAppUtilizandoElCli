import React, { useState, useEffect } from 'react';
import { products } from './items';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const traerProductos = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                setItems(res);
            })
            .catch((error)=>{
                console.log(error);
            });
    },  []);
    
    return (
        <>
            <h1>{saludo}</h1>

            {items?.length === 0 ? (
                <h1>cargando...</h1>
            ) : (
                <ItemList items={items} />
            )}
        </>  
    );
};    
export default ItemListContainer;
