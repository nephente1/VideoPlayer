import { useNavigate } from 'react-router-dom';
import { MovieBox, ImageWrapper, Image, Description, Title, TileText } from './MovieCard.styles';

export interface MovieCardProps {
  title: string,
  year: string,
  poster: string,
  imdbID: string
}

export const MovieCard = ({ title, year, poster, imdbID }: MovieCardProps) => {
  const navigate = useNavigate();
  const imageSrc = require(`../../files/images/${poster}`)

  const handleClickBox = () => {
    navigate(`/preview/${imdbID}`)
  }

  return (
    <MovieBox onClick={handleClickBox}>
      <ImageWrapper>
        <Image src={imageSrc} alt={title} />
      </ImageWrapper>
      <Description>
        <Title data-testid="movie-title" title={title}>{title}</Title>
        <TileText data-testid="movie-title">{year}</TileText>
      </Description>
    </MovieBox>
  );
};
