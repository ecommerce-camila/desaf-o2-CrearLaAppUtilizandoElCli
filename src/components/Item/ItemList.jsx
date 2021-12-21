import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  //console.log("Los products", products);
  return (
    <div>
          {items?.map((product) =>{
              return <Item key={product.id} product={product} />;
          })}
    </div>
  );
};
export default ItemList;