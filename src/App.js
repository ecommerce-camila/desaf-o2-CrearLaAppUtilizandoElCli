import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/itemCount";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import "./styles/styles.css";
import Contador from "./components/itemCount";

function App() {
  return (
      <center>
      <NavBar />
      <Contador />
      <ItemListContainer greeting='Tenemos variedad de productos' />
        <h1>
          soy un texto
        </h1>
      </center>

  );
}

export default App;
