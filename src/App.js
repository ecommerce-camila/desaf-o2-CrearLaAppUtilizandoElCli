import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import "./styles/styles.css";

function App() {
  return (
      <center>
      <NavBar />
      <ItemListContainer greeting='Tenemos variedad de productos' />
      </center>

  )
}

export default App;
