import { useState, useEffect } from "react";
import getOneProduct from "../../services/getOneProducts";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  console.log("item", item);

  useEffect(() => {
    getOneProduct
    .then((res) => setItem(res))
    .catch((err) => console.log(err));
  });

  return (
    <div>
      <h6 class="text-muted">aca va el itemdetailcontainer</h6>
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;