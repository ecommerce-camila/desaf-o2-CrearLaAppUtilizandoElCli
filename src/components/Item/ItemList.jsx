import React from 'react';
import Item from './Item';

const ItemList = memo (
    ({ productos , items })=> {
        console.log('itemList')
        return (
            <div>
            { productos.map((prod) => <Item prod= {prod} />) }
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    maxWidth: '80%',
                    margin: '0 auto',
                }}
            
                {items.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        
        )
    }
(oldProps, newProps) => oldProps.items.length === newProps.items.length );

export default ItemList;