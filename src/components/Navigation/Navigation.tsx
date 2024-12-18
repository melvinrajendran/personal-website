import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Navigation.scss';
import socials from './socials';

const Navigation = () => {
  return (
    <Navbar fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className={`mx-lg-4 mx-xl-5 ${location.pathname === '/' ? 'active' : ''}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/work"
              className={`me-md-4 me-xl-5 ${location.pathname === '/work' ? 'active' : ''}`}
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="/btw"
              className={`me-md-4 me-xl-5 ${location.pathname === '/btw' ? 'active' : ''}`}
            >
              BTW
            </Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              {socials.map((social, index) => {
                return (
                  <NavDropdown.Item
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex justify-content-center"
                    title={social.title}
                  >
                    <i className={`btn fa-lg social-icon ${social.iconClass}`} />
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className="letter-icon position-fixed start-50 translate-middle">
          <span className="letter p-2" title="About">
            M
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default withRouter(Navigation);
