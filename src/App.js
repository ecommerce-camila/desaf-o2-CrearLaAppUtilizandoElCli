import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Contador from "./components/itemCount";
import ItemListContainer from './components/Item/ItemListContainer';
import ItemList from "./components/Item/ItemList";

function App() {
  return (
      <div>
      <NavBar />
      <Contador />
      <ItemList />
      <ItemListContainer saludo='Bienvenidos a nuestra tienda online' />
      </div>

  );
}

export default App;
