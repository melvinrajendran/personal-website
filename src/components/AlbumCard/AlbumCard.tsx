import React from 'react';
import { Card } from 'react-bootstrap';
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
        <Card.Img
          className="rounded shadow"
          variant="top"
          src={imageURL}
          alt={imageAlt}
          title="Spotify"
        />
      </a>
      <Card.Body className="pt-4">
        <Card.Title>
          <h3 className="h5">{title}</h3>
        </Card.Title>
        <Card.Text>{artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
