import { kebabCase } from 'lodash';
import React, { ReactElement } from 'react';
import './BlogPost.scss';

type BlogPostProps = {
  iconClass: string;
  title: string;
  month: string;
  day: number;
  year: number;
  body: Array<ReactElement>;
};

const BlogPost = ({ iconClass, title, month, day, year, body }: BlogPostProps) => {
  const ref = kebabCase(title);

  return (
    <article className="blog-post mb-5">
      <a href={`#${ref}`} className="blog-post-anchor">
        <h2 className="blog-post-title my-3 pb-1" id={ref}>
          <i className={`h2 ${iconClass} me-3 pt-2`} aria-hidden="true" />
          {title.toLowerCase()}
        </h2>
      </a>
      <p className="blog-post-meta h6 mb-4">{`${month} ${day}, ${year}`}</p>
      <div className="blog-post-body">
        {body.map((paragraph, index) => {
          return <div key={index}>{paragraph}</div>;
        })}
      </div>
    </article>
  );
};

export default BlogPost;
