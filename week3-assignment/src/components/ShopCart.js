import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';

function ShopCart({ cart }) {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.payment.cost;
    });
    setCartCount(price);
  }, [cart, cartCount]);

  return (
    <section>
      <Container>
        <Row className="centerDiv">
          <div className="col-lg-12 text-center">
            <h1 className="text-uppercase title-text">
              Products within Shopping Cart
            </h1>
            <p className="para">
              Here is a list of all of the products in your shopping cart
            </p>
          </div>
        </Row>
        <div className="contain">
          <Row className="centerDiv">
            {cart.length > 0 ? (
              cart.map((item) => <CartProduct {...item} key={item.title} />)
            ) : (
              <p>There are no items within you shopping cart at this time.</p>
            )}
            {cart.length > 0 ? (
              <p>Total Price ${cartCount}.00</p>
            ) : (
              <>
                <br />
                <br />
                <p>
                  There is no price to display as there are no items in your
                  cart
                </p>
              </>
            )}
          </Row>
        </div>
      </Container>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(ShopCart);
