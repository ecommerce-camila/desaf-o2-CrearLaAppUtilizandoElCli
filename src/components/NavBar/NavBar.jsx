import Content from "./content";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div>
            <Navbar bexpand="lg">
            <Container>
                <img
                    src="/logo.png"
                    width="150"
                    height="150"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                    <NavDropdown title="Lista de Secciones" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Celulares</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Auriculares</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Computadoras</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Sucursales</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
            </Navbar>
            <Content />
        </div>
    )    
};
export default NavBar;