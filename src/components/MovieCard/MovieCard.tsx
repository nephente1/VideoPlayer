import { MovieBox, ImageWrapper, Image, Description, Title, TileText, Tooltip } from './MovieCard.styles';
import { memo } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface MovieCardProps {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
  description: string;
}

export const MovieCard = memo(({ title, year, poster, imdbID, description }: MovieCardProps) => {
  const navigate = useNavigate();
  const imageSrc = require(`../../files/images/${poster}`);

  const handleClickBox = () => {
    navigate(`/preview/${imdbID}`);
  };

  React.useEffect(() => {
    console.log('effect');
  }, []);

  return (
    <MovieBox onClick={handleClickBox}>
      <ImageWrapper>
        <Image src={imageSrc} alt={title} />
      </ImageWrapper>
      <Description>
        <Title data-testid="movie-title" title={title}>
          {title}
        </Title>
        <TileText data-testid="movie-title">{year}</TileText>
      </Description>
      <Tooltip className="tooltip">{description}</Tooltip>
    </MovieBox>
  );
});
