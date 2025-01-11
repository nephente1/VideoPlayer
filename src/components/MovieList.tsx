import { MovieCard, MovieCardProps } from '../components/MovieCard/MovieCard';

interface MovieListProps {
  movies: MovieCardProps[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </>
  );
};
