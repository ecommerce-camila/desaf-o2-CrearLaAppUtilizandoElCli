import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import "./styles/styles.css";

function App() {
  return (
      <center>
      <NavBar />
      <ItemListContainer greeting='Tenemos variedad de productos' />
      <h1>
        soy un texto
      </h1>
      </center>

  )
}

export default App;
