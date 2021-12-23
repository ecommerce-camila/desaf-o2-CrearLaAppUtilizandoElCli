import React from 'react';

const Item = ({ product }) => {
    return (
      <div className="flex bg-black">
        <h3>{product.title}</h3>
        <h2 class="text-warning">{product.price}</h2>
        <p class="text-warning">{product.description}</p>
        <p class="text-warning">{product.stock}</p>
        <img class="mx-auto d-block" src={product.img} alt={product.name}  width="190" height="190"/>
        <button type="button" class="btn btn-warning">Ver detalle del producto</button>

      
      
      
      </div>
    );
  };
  export default Item;