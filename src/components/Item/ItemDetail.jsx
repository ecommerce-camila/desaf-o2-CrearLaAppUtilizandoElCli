import ItemCount from '../ItemCount';

const ItemDetail = ({ item }) => {
    console.log("El item", item);
    return (
        <div>
          <div className="flex bg-black">
              <h3>{item.title}</h3>
              <p> {item.description}</p>
              <img src={`${item.image}`} alt={`${item.image}`} />
          </div>
          <ItemCount stock={item.stock} />
        </div>    
    );
  };
  export default ItemDetail;