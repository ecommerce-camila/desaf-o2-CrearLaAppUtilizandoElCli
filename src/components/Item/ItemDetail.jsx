import {useState, useContext} from 'react'
import Counter from "../Counter";
import { CartContext } from '../../context/CartContext';
import { item } from "../Item/items";

function ItemDetail({prod}) {
    const [count, setCount] = useState(0)
    const {cartList ,agregarAlCarrito}= useContext(CartContext)

    function onAdd (cant){
        console.log(cant)
        agregarAlCarrito({...prod, cantidad:cant})
    }
    console.log(cartList);

    return (  
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px',
        }}
        >
        <div>
            <img
                width={400}
                src={item.img}
                alt="img"
                style={{ margin: '10px' }}
            />
        </div>
        <div style={{ width: '50%' }}>
            <h2>{item.name}</h2>
            <h3>$ {item.price}</h3>
            <h4 style={{ width: '70%' }}>{item.description}</h4>
            <Link to="/">Voler al home</Link>
        </div>
        {!goCart ? (
            <Counter stock={item.stock} onAdd={onAdd} />
        ) : (
            <Link to="/cart">Ir al carrito</Link>
        )}
        </div>        
    )
};

export default ItemDetail;