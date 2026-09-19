import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
import './AlbumCard.scss';

type AlbumCardProps = {
  albumURL: string;
  imageURL: string;
  imageAlt: string;
  title: string;
  artist: string;
};

const AlbumCard = ({ albumURL, imageURL, imageAlt, title, artist }: AlbumCardProps) => {
  return (
    <Card className="album-card">
      <a href={albumURL} target="_blank" rel="noopener noreferrer">
        <CardImg
          className="rounded shadow"
          variant="top"
          src={imageURL}
          alt={imageAlt}
          title="Spotify"
        />
      </a>
      <CardBody className="pt-4">
        <CardTitle>
          <h3 className="h5">{title}</h3>
        </CardTitle>
        <CardText>{artist}</CardText>
      </CardBody>
    </Card>
  );
};

export default AlbumCard;
