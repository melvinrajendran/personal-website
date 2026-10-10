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
    <li>
      <button
        type="button"
        className={`timeline-item rounded ml-3 p-4 shadow ${isSelected ? 'selected-item' : ''}`}
        aria-pressed={isSelected}
        onClick={() => setSelectedIndex(index)}
      >
        <span
          className={`timeline-item-title d-block h5 mb-0 ${isSelected ? 'selected-text' : ''}`}
        >
          {organization}
        </span>
        <span
          className={`d-block small text-gray mt-2 mb-0 h5 ${isSelected ? 'selected-subtext' : ''}`}
        >
          {startDate} – {endDate}
        </span>
      </button>
    </li>
  );
};

export default TimelineItem;
