import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="img-fluid">
      <Container>
        <div className="flex-wrap">
          <div className="social text-center">
            <h5 className="text-uppercase">Follow US</h5>
          </div>
          <div className="text-center">
            <p className="para">
              © 2021 Airbnb, Inc.·Privacy·Terms·Sitemap
              <a
                href="_"
                className="https://www.airbnb.com/"
                aria-label="airbnb link"
              >
                <span>Airbnb</span>
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
