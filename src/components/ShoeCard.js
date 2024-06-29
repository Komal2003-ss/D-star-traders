import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap';
const ShoeCard = ({product}) => {
  return (
    <>
      <Container>
        <Row >
            {product.map((curproduct)=>{
                return(
                    <>
                    <Col lg="4" md="6" className='p-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={curproduct.image} />
                    <Card.Body>
                        <Card.Title>Rs. 370</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
       
                    </>

                )
            })}
           </Row>
      </Container>  
    </>
  )
}

export default ShoeCard;
