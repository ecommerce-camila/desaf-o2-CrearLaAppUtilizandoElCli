import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route, CartProvider } from 'react';
import Cart from './components/Cart';


function App() {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:id"
                        element={<ItemListContainer />}
                    />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />

                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;