import React, { ReactElement } from 'react';
import { Card } from 'react-bootstrap';
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
      <Card.Img className="card-img" src={imageURL} alt={imageAlt} />
      <Card.Body className="pt-4">
        <Card.Title>
          {projectURL ? (
            <a href={projectURL} target="_blank" rel="noopener noreferrer" className="link-card">
              <h3 className="d-inline project-title">{title}</h3>
            </a>
          ) : (
            <h3 className="project-title">{title}</h3>
          )}
        </Card.Title>
        <Card.Subtitle className="mb-3">{date}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <div className="d-flex align-items-center">
          {codeURL ? (
            <a href={codeURL} target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="px-0 project-icon btn fab fa-github fa-lg" />
            </a>
          ) : (
            <i className="px-0 project-icon btn fab fa-github fa-lg disabled" />
          )}
          <small className="ms-auto text-muted">{technologies}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
