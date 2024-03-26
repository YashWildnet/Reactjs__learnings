import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Dashboard() {
    return (
        <Navbar bg="light" data-bs-theme="light">
             <Container>
             <Navbar.Brand href="/">Login</Navbar.Brand>
             <Nav className="me-auto">
             <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">Login</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
  }

   export default Dashboard;
  
       