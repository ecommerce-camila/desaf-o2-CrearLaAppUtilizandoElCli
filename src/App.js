import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Item/itemDetailContainer";
import ItemListContainer from './components/Item/ItemListContainer';
import Cart from './components/Cart';

function App() {
  return (
      <BrowserRouter>
          <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/categoria/:id"
                        element={<ItemListContainer />}
                    />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />

                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
      </BrowserRouter>
  );
}

export default App;
