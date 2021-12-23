import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Item/itemDetailContainer";
import ItemListContainer from './components/Item/ItemListContainer';
import Cart from './components/Cart';

function App() {
  return (
      <BrowserRouter>
          <div>
            <NavBar />
            <Routes>
                <Route
                  exact
                  path="/"
                  element={ <ItemListContainer saludo = 'Te brindamos la mejor atención'/>}
                />
                <Route
                  exact
                  path="/categoria/celulares"
                  element={ <ItemListContainer />}
                />
                <Route
                  exact
                  path="/categoria/notebooks"
                  element={ <ItemDetailContainer />}
                />
                <Route
                  exact
                  path="/cart"
                  element={ <Cart />}
                />
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
