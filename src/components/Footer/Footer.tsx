import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';
import socials from '../Navigation/socials';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="py-4">
      <footer className="pt-3 mt-4 border-top">
        <Row className="my-4 justify-content-center">
          {socials.map((social, index) => {
            return (
              <Col key={index} xs={2} lg={1} className="d-flex justify-content-center">
                <a
                  title={social.title}
                  aria-label={social.title}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                >
                  <i className={`social-icon btn fa-lg ${social.iconClass}`} aria-hidden="true" />
                </a>
              </Col>
            );
          })}
        </Row>
        <p className="text-center">&copy; {currentYear} Melvin Rajendran</p>
      </footer>
    </Container>
  );
};

export default Footer;
