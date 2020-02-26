import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#about" aria-label="Back To Top" className="back-to-top">
          <FontAwesomeIcon icon={['fas', 'angle-up']} size="2x" color="white" />
        </a>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <FontAwesomeIcon icon={['fab', name]} inverse />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>{' '}
          - Reworked by{' '}
          <a href="https://github.com/ralonsodeniz" target="_blank" rel="noopener noreferrer">
            Raúl Alonso Déniz
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
