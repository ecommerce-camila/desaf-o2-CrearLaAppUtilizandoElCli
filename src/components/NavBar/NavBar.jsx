import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            style={{
                backgroundColor: 'Black',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
            }}
        >
            <Link to="/">
                <h2>Inicio</h2>
            </Link>
            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                }}
            >
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/celulares">Celulares</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/notebooks">Notebooks</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/cart">Carrito</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;