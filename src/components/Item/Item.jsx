import React from 'react';

const Item = ({ product }) => {
    return (
      <div className="flex bg-info">
        <h3>{product.title}</h3>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <p>{product.stock}</p>
        <img src={product.img} alt={product.name} />
      </div>
    );
  };
  export default Item;
