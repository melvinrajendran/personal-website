import React from 'react';
import './TimelineDescription.scss';
import { TimelineItem } from '../Timeline/Timeline';

const TimelineDescription = ({ organization, roles }: TimelineItem) => {
  return (
    <div>
      <h3 className="h2 title-text mb-3">{organization}</h3>
      {roles.map((r, index) => {
        const { role, startDate, endDate, bullets } = r;
        return (
          <div key={index}>
            <div>
              <h4 className="h5 d-inline">{role}</h4>
              <p className="h5 d-inline">
                {' '}
                | {startDate} – {endDate}
              </p>
            </div>
            <ul className="timeline-ul mt-3">
              {bullets.map((bullet, index) => {
                return <li key={index}>{bullet}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineDescription;
