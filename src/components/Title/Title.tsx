'use client';

import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './Title.scss';

type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  return (
    <Container className="p-4">
      <Row className="justify-content-center">
        <Col md={10} lg={7} className="p-5">
          <h1 className="display-2 mb-4 text-center">{title.toLowerCase()}</h1>
          <CSSTransition nodeRef={subtitleRef} in appear timeout={1000} classNames="subtitle">
            <p ref={subtitleRef} className="fs-3 text-center">
              {subtitle}
            </p>
          </CSSTransition>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
