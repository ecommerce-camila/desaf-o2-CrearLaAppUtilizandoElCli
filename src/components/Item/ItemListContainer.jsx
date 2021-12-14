import React, {useState} from 'react'
import { products } from './Items';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    const traerProductos = new Promise ((revolse, reject)=>{
        setTimeout(() => {
            resolve(products)
        }, 1000);
    });
    traerProductos
    .then((res) => {
        setItems(res);
    })
    .catch((error)=>{
        console.log(error)
    })
    return (
        <>
            <h1>{saludo}</h1>
            <Itemlist items={items} />
        </>
    );
};

export default ItemListContainer;
