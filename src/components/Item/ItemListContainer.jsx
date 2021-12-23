import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './items';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    const { idCate } = useParams()

    useEffect(() => {
        const traerProductos = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProductos
        if (idCate) {
            getFech
            .then((res => setProductos(res.filter(prod => prod.categoria === idCate)))),
                setItems(res)
            .catch((error => console.log(error)));
        }    else {
            getFech
            .then((res => setProductos(res))),
            setItems(res)
            .catch((error => console.log(error)))
        }
    }, [idCate])

    
    console.log(idCate)

    return (
        <>
            <h5>{saludo}</h5>

            {items?.length === 0 ? (
                <h6>cargando...</h6>
            ) : (
                <ItemList items={items} />
            )}
        </>  
    );
};    
export default ItemListContainer;
