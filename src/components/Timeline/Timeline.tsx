'use client';

import React, { ReactElement, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Timeline.scss';
import TimelineDescription from '../TimelineDescription/TimelineDescription';
import TimelineItem from '../TimelineItem/TimelineItem';
import { CSSTransition } from 'react-transition-group';

type Role = {
  role: string;
  startDate: string;
  endDate: string;
  bullets: Array<string | ReactElement>;
};

export type TimelineItem = {
  organization: string;
  roles: Role[];
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeline = ({ items }: TimelineProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const descriptionRef = useRef<HTMLDivElement>(null);

  return (
    <Row className="align-items-center gy-4 my-1">
      <Col className="text-center" lg={{ span: 3, offset: 0 }} xl={{ span: 3, offset: 1 }}>
        <ul className="timeline">
          {items.map((experience, index) => {
            const { organization, roles } = experience;

            return (
              <TimelineItem
                key={index}
                index={index}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                organization={organization}
                startDate={roles[roles.length - 1].startDate}
                endDate={roles[0].endDate}
              />
            );
          })}
        </ul>
      </Col>
      <Col lg={{ span: 7, offset: 2 }} xl={{ span: 6, offset: 1 }}>
        <CSSTransition
          key={selectedIndex}
          nodeRef={descriptionRef}
          in
          appear
          timeout={1000}
          classNames="description"
        >
          <div ref={descriptionRef}>
            <TimelineDescription {...items[selectedIndex]} />
          </div>
        </CSSTransition>
      </Col>
    </Row>
  );
};

export default Timeline;
