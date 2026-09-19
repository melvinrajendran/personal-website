'use client';

import React, { useCallback, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import './SkillList.scss';

type SkillSectionProps = {
  title: string;
  items: string[];
};

type SkillListProps = {
  sections: SkillSectionProps[];
};

const SkillSection = ({ title, items }: SkillSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
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

  const numItems = items.length;
  const midIndex = numItems % 2 === 0 ? numItems / 2 : Math.floor(numItems / 2) + 1;

  return (
    <CSSTransition nodeRef={nodeRef} in={inView} timeout={1000} classNames="skill-list">
      <Container fluid ref={setRefs} className={`${!inView && 'invisible'} pt-4`}>
        <Row>
          <Col>
            <h3 className="skill-section h2 text-center">{title}</h3>
          </Col>
        </Row>
        <Row className="p-4 justify-content-center">
          {[0, 1].map((index) => {
            const startIndex = index === 0 ? 0 : midIndex;
            const endIndex = index === 0 ? midIndex : numItems;

            return (
              <Col
                key={index}
                xs={7}
                md={{ span: 6, offset: 1 }}
                lg={{ span: 4, offset: index === 0 ? 2 : 1 }}
              >
                <ul className="skill-section-list h2 fw-normal">
                  {items.slice(startIndex, endIndex).map((skill, index) => {
                    return (
                      <li key={index}>
                        <p className="fs-4">{skill}</p>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            );
          })}
        </Row>
      </Container>
    </CSSTransition>
  );
};

const SkillList = ({ sections }: SkillListProps) => {
  return (
    <>
      {sections.map((section, index) => {
        return <SkillSection key={index} {...section} />;
      })}
    </>
  );
};

export default SkillList;
