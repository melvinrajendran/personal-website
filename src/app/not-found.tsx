import React from 'react';
import './not-found.scss';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container fluid className="p-4">
      <Row className="p-5 not-found-container align-items-center">
        <Col className="text-center py-5">
          <h1 className="display-2 mb-4">404!</h1>
          <p className="fs-3">The page you&apos;re looking for doesn&apos;t exist.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
