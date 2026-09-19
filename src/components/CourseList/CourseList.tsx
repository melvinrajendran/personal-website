'use client';

import React, { useCallback, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import './CourseList.scss';

type Course = {
  name: string;
  code: string;
};

type CourseListProps = {
  items: Course[];
};

const CourseList = ({ items }: CourseListProps) => {
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
  const midIndex = numItems % 2 === 0 ? numItems / 2 : numItems / 2 + 1;

  return (
    <CSSTransition nodeRef={nodeRef} in={inView} timeout={1000} classNames="course-list">
      <Row ref={setRefs} className={`${!inView && 'invisible'} p-4 justify-content-center`}>
        {[0, 1].map((index) => {
          const startIndex = index === 0 ? 0 : midIndex;
          const endIndex = index === 0 ? midIndex : numItems;

          return (
            <Col key={index} lg={{ span: 5, offset: index === 0 ? 0 : 1 }}>
              <ul className="h2 fw-normal coursework-list text-center">
                {items.slice(startIndex, endIndex).map((course, index) => {
                  const { code, name } = course;

                  return (
                    <li key={index} className="py-3">
                      <h3 className="h4 course-name">{name}</h3>
                      <p className="h6 fw-normal course-code">{code}</p>
                    </li>
                  );
                })}
              </ul>
            </Col>
          );
        })}
      </Row>
    </CSSTransition>
  );
};

export default CourseList;
