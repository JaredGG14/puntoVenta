import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as = {Link} to="/puntoVenta/public/" >
          
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/puntoVenta/public/products">Productos</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/providers">Proveedores</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/DeliveryDay">Día de Entrega</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/Sells">Ventas</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/Purchases">Compras</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;