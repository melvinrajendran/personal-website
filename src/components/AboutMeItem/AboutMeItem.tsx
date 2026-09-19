'use client';

import React, { ReactElement, useCallback, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import './AboutMeItem.scss';

type AboutMeItemProps = {
  index: number;
  text: ReactElement | string;
  iconClass: string;
};

const AboutMeItem = ({ index, text, iconClass }: AboutMeItemProps) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      nodeRef.current = node;
      ref(node);
    },
    [ref],
  );
  const hasEvenIndex = index % 2 === 0;

  return (
    <Row className="align-items-center" key={index}>
      <Col lg className={`mb-4 text-center ${hasEvenIndex ? 'order-lg-2' : 'order-lg-1'}`}>
        <i className={`about-icon ${iconClass}`} />
      </Col>
      <CSSTransition nodeRef={nodeRef} in={inView} timeout={1000} classNames="about-me-item">
        <Col
          lg
          className={`${!inView && 'invisible'} mb-4 text-center ${
            hasEvenIndex ? 'order-lg-1' : 'order-lg-2'
          }`}
          ref={setRefs}
        >
          <p className="pt-4 px-4 fs-4 fw-normal">{text}</p>
        </Col>
      </CSSTransition>
    </Row>
  );
};

export default AboutMeItem;
