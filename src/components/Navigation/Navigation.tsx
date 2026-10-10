'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Navigation.scss';
import socials from './socials';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Navbar fixed="top" expand>
      <Container fluid>
        <Nav className="flex-grow-1 flex-sm-grow-0 justify-content-between justify-content-sm-start me-sm-auto">
          <Navbar.Brand as={Link} href="/" className="letter-icon">
            <span className="letter p-2" title="About">
              M
            </span>
          </Navbar.Brand>
          <Nav.Link
            as={Link}
            href="/"
            className={`me-sm-3 me-md-4 mx-lg-4 mx-xl-5 ${pathname === '/' ? 'active' : ''}`}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/work"
            className={`me-sm-3 me-md-4 me-xl-5 ${pathname === '/work' ? 'active' : ''}`}
          >
            Work
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/btw"
            className={`me-sm-3 me-md-4 me-xl-5 ${pathname === '/btw' ? 'active' : ''}`}
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
      </Container>
    </Navbar>
  );
};

export default Navigation;
