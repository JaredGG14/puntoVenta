import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand as = {Link} to="/puntoVenta/public/" >
            <img src="./images/Logo_PV.png" width="45px" height="45px"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/puntoVenta/public/products">Products</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/providers">Providers</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/deliveryDay">Delivery Day</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/sells">Sells</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/purchases">Purchases</Nav.Link>
            <Nav.Link as = {Link} to="/puntoVenta/public/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;