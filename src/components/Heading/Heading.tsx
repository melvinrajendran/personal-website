import { kebabCase } from 'lodash';
import React from 'react';
import './Heading.scss';

type HeadingProps = {
  text: string;
};

const Heading = ({ text }: HeadingProps) => {
  const ref = kebabCase(text);

  return (
    <a href={`#${ref}`}>
      <h2 className="display-4 mb-3" id={ref}>
        <span aria-hidden="true">{'// '}</span>
        {text.toLowerCase()}
      </h2>
    </a>
  );
};

export default Heading;
