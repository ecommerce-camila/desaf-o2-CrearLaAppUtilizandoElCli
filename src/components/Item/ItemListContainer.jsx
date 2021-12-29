import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { products } from './items';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
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
            <ItemList items={items} />
        </>
    );
    //ejemplo de evento
    const handleClick=(e)=>{
        e.preventDefault() 
        setBool(!bool)
    }

    const handleAgregar=()=>{
        setItems([
            ...items,
            { name: 'Celular',
            description: 'Celular Samsung A32 Blanco',
            price: "$43.999",
            stock: 5,
            id: 1,
            img: 'img/cel1.png',
            category: 'celulares' }
        ])
    }

    console.log(bool);
    console.log('itemListContainer');

    return (
        <>
            <button onClick={handleClick}>Cambiar estado </button>           
            <button onClick={handleAgregar}>Agregar Item </button>           
            <ItemList items={items} />
            {/* <button onKeyDown={handleClick} >click</button> */}
        </>
    )
    }

    export default ItemListContainer;