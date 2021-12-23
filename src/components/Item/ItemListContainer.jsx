import React, { useState, useEffect } from 'react';
import { products } from './items';
import ItemList from './ItemList';
import { useParams } from 'react-router';

const ItemListContainer = ({saludo}) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                const categorias = res.filter((i) => i.category === `${id}`);
                id === undefined ? setItems(res) : setItems(categorias);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);


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
