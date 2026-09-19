'use client';

import React, { useRef } from 'react';
import './FullScreenTitle.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { CSSTransition } from 'react-transition-group';

type FullScreenTitleProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
};

const FullScreenTitle = ({ title, subtitle, imageSrc, imageAlt }: FullScreenTitleProps) => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  return (
    <Container className="p-4">
      <Row className="p-5 fs-title-container align-items-center">
        <Col xl={7} className="text-center text-xl-start pb-5 pb-xl-0">
          <h1 className="display-2 mb-4">
            <Typewriter options={{ strings: title, autoStart: true }} />
          </h1>
          <CSSTransition nodeRef={subtitleRef} in appear timeout={4000} classNames="fs-subtitle">
            <p ref={subtitleRef} className="fs-3">
              {subtitle}
            </p>
          </CSSTransition>
        </Col>
        <Col xl={5} className="d-flex justify-content-center">
          <Image
            fluid
            className="rounded-corners shadow"
            width="550"
            height="550"
            src={imageSrc}
            alt={imageAlt}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FullScreenTitle;
