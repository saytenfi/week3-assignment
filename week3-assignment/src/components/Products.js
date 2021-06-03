import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { posts } from '../data/airbnbs';
import RentalProduct from './RentalProduct';
import ShopCart from './ShopCart';

function Products() {
  return (
    <section>
      <Container>
        <Col>
          <Row>
            <div className="col-lg-12 text-center">
              <h1 className="text-uppercase ">All Products</h1>
              <p className="para">
                Here is a list of all of our current products
              </p>
            </div>
          </Row>
          <div>
            <Row className="centerDiv">
              {posts.map((item) => (
                <RentalProduct {...item} key={item.title} />
              ))}
            </Row>
          </div>
        </Col>
        <Col>
          <ShopCart />
        </Col>
      </Container>
    </section>
  );
}

export default Products;
