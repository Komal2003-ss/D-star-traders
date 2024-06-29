import React, { useState } from 'react'
import Product from './AllProducts.js';
import ShoeCard from './ShoeCard.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar,Button} from 'react-bootstrap';
const ShowAllProduct = () => {
  const [product, setProduct] = useState(Product);
   const filterProduct = (category)=>{
    const updateProductList = Product.filter((curproduct)=>{
      return curproduct.category === category;

    });
    setProduct(updateProductList);
   }
  return (
    <>
      <Navbar className="bg-dark text-light" variant='light'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-aut o">
              <Button className='btn btn-success m-3' onClick={()=>filterProduct("derby")}>Men's synthetic Derby Shoes </Button>
              <Button className='btn btn-success m-3' onClick={()=>filterProduct("loafer")}>Men's synthetic Loafer Shoes</Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ShoeCard product={product} />
    </>
  )
}

export default ShowAllProduct
