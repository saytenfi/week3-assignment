import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/shopping-actions';

function RentalProduct(props) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="services">
          <div className="services-img text-center py-4">
            <Image src={props.image} alt={props.title} fluid />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-uppercase font-roboto">
              {props.title}
            </h5>
            <p className="card-text text-secondary">{`House Type: ${props.houseType} `}</p>
            <p className="card-text text-secondary">{`Location: ${props.location.city}, ${props.location.country} `}</p>
            <p className="card-text text-secondary">{`Host: ${
              props.host.name
            } (${props.host.isSuperhost ? 'Superhost' : 'not Superhost'}) `}</p>
            <p className="card-text text-secondary">{`Price: $${
              props.payment.cost
            }${
              props.payment.description ? `, ${props.payment.description}` : ''
            } `}</p>
          </div>
          <Button
            onClick={() => {
              props.addToCart(props.title);
            }}
          >
            Add to Shopping Cart
          </Button>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (title) => dispatch(addToCart(title)),
  };
};

export default connect(null, mapDispatchToProps)(RentalProduct);
