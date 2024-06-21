import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {
  
  const { id: productId } = useParams(); 

  const {data: product, isLoading, error} = useGetProductDetailsQuery(productId);

  return (
    <>
      <Link className='btn btn-secondary my-3 text-white fw-semibold' to='/'>
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
            {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Row>
        <Col md={5}>
          <div className='product-image-container'>
            <Image src={product.image} alt={product.name} fluid className='product-image' />
          </div>
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item className='fw-bold h5'>
              Price: &#8377; {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='fw-medium'>Description:</div>
              <div>{product.description}</div>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col className='fw-medium'>Price:</Col>
                  <Col>
                    <div className='fw-bold'>&#8377; {product.price}</div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col className='fw-medium'>Status:</Col>
                  <Col>
                    <div className={product.countInStock > 0 ? 'fw-bold text-success' : 'fw-bold text-danger'}>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                  <span className='fw-medium'>Add to Cart</span>
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
          </Row>
        </>
      )}
      
    </>
  );
}

export default ProductScreen;
