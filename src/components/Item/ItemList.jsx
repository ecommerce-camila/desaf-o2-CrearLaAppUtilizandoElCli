import React from 'react';
import Item from './Item';
import ItemListContainer from './src/components/Item/ItemListContainer';

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
