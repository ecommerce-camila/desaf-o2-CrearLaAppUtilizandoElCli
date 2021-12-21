import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Item/itemDetailContainer";
import ItemListContainer from './components/Item/ItemListContainer';

function App() {
  return (
      <div>
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer saludo='Bienvenidos a nuestra tienda online' />
      </div>

  );
}

export default App;
