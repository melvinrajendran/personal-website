import React, { ReactElement } from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'react-bootstrap';
import './ProjectCard.scss';

type ProjectCardProps = {
  imageURL: string;
  imageAlt: string;
  projectURL?: string;
  title: string;
  date: string;
  text: ReactElement;
  codeURL?: string;
  technologies: ReactElement;
};

const ProjectCard = ({
  imageURL,
  imageAlt,
  projectURL,
  title,
  date,
  text,
  codeURL,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card className="project-card bg-white shadow">
      <CardImg className="project-img" src={imageURL} alt={imageAlt} loading="lazy" />
      <CardBody className="pt-4">
        <CardTitle>
          {projectURL ? (
            <a href={projectURL} target="_blank" rel="noopener noreferrer" className="link-card">
              <h3 className="d-inline project-title">{title}</h3>
            </a>
          ) : (
            <h3 className="project-title">{title}</h3>
          )}
        </CardTitle>
        <CardSubtitle className="mb-3">{date}</CardSubtitle>
        <CardText>{text}</CardText>
        <div className="d-flex align-items-center">
          {codeURL && (
            <a
              href={codeURL}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label={`${title} on GitHub`}
            >
              <i className="px-0 project-icon btn fab fa-github fa-lg" aria-hidden="true" />
            </a>
          )}
          <small className="ms-auto text-muted">{technologies}</small>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
