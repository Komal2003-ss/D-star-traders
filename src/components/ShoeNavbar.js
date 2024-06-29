// import React from 'react'
// import {Button,Navbar} from 'react-bootstrap';
// const ShoeNavbar = () => {
//   return (
//     <>
    
//       <Button className='btn btn-success'>Men's synthetic Loafers Shoes </Button>
//       <Button className='btn btn-success'>Men's synthetic Derby Shoes</Button>
      
    
//     </>
      
    
//   )
// }

// export default ShoeNavbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar,Button} from 'react-bootstrap';


function BasicExample() {
  return (
    <Navbar className="bg-dark text-light" variant='light'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-aut o">
          <Button className='btn btn-success m-3'>Men's synthetic Loafers Shoes </Button>
          <Button className='btn btn-success m-3'>Men's synthetic Derby Shoes</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;