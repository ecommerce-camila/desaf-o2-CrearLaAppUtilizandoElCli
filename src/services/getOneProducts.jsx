const oneProduct = {
    id: 1,
    image: "img/F1.png",
    title: "",
    descripcion: "este es el primer producto",
    categoria: "Procesadores",
    price: "73000",
    stock: "4",
  };
  
  const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(oneProduct);
    }, 2000);
  });
  
  export default getOneProduct;