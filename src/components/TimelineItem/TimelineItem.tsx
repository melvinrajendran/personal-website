import React from 'react';
import './TimelineItem.scss';

type TimelineItemProps = {
  index: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  organization: string;
  startDate: string;
  endDate: string;
};

const TimelineItem = ({
  index,
  selectedIndex,
  setSelectedIndex,
  organization,
  startDate,
  endDate,
}: TimelineItemProps) => {
  const isSelected = selectedIndex === index;

  return (
    <li
      className={`timeline-item rounded ml-3 p-4 shadow ${isSelected && 'selected-item'}`}
      onClick={() => setSelectedIndex(index)}
      onKeyDown={(event) => event.key === 'Enter' && setSelectedIndex(index)}
      tabIndex={0}
    >
      <div className="unclickable">
        <h3 className={`text-start h5 mb-0 ${isSelected && 'selected-text'}`}>{organization}</h3>
        <div
          className={`small text-gray text-start mt-2 mb-0 h5 ${isSelected && 'selected-subtext'}`}
        >
          {startDate} – {endDate}
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
