import { Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/shopping/shopping-actions';

function CartProduct(props) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <div className=" text-center py-4">
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
            variant="danger"
            onClick={() => {
              props.removeFromCart(props.title);
            }}
          >
            Remove from Shopping Cart
          </Button>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (title) => dispatch(removeFromCart(title)),
  };
};

export default connect(null, mapDispatchToProps)(CartProduct);
