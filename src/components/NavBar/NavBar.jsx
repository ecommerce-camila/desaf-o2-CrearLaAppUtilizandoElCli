// import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Content from "./content";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div>
            <Navbar bexpand="lg">
            <Container>
                <img
                    src="img/logo.png"
                    width="150"
                    height="150"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Link to="/">Home</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/categoria/celulares">Celulares</Link>
                        <Link to="/categoria/notebooks">Notebooks</Link>
                        <CartWidget />
                    </Nav>
                    </Navbar.Collapse>
                    <Link to="/cart" >Carrito</Link> 
            </Container>
            </Navbar>
            <Content />
        </div>
    )    
};
export default NavBar;