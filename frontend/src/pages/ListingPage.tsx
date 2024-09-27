import { useContext, useState } from "react";
import { MovieCard, MovieCardProps } from "../components/MovieCard/MovieCard";
import { BoxesContainer, CenterAlignedContainer, Loader } from "../components/styles";
import { Selector } from "../components/SortSelector/SortSelector";
import { SORTING_OPTIONS, sortingOptions } from "../shared/utils";
import { DataContext } from "../components/DataProvider";


export const ListingPage = () => {
  const { moviesData, loading, error } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState('');


  if (loading) return <Loader data-testid="loader" position='absolute' />;
  if (error) return <div>Error: {error}</div>;

  const sortedAZItems = [...moviesData].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const sortedZAItems = [...moviesData].sort((a, b) =>
    a.title.localeCompare(b.title)
  ).reverse();

  const sortedNewestItems = [...moviesData].sort((a, b) =>
    a.year.localeCompare(b.year)
  ).reverse();

  const sortedOldestItems = [...moviesData].sort((a, b) =>
    a.year.localeCompare(b.year)
  );

  const displayMovies = (option: string) => {
    switch (option) {
      case '':
        return moviesData.map((movie: MovieCardProps) => <MovieCard key={movie.imdbID} {...movie} />);
      case SORTING_OPTIONS.SORT_AZ:
        return sortedAZItems.map((movie: MovieCardProps) => <MovieCard key={movie.imdbID} {...movie} />);
      case SORTING_OPTIONS.SORT_ZA:
        return sortedZAItems.map((movie: MovieCardProps) => <MovieCard key={movie.imdbID} {...movie} />);
      case SORTING_OPTIONS.FROM_NEWEST:
        return sortedNewestItems.map((movie: MovieCardProps) => <MovieCard key={movie.imdbID} {...movie} />);
      case SORTING_OPTIONS.FROM_OLDEST:
        return sortedOldestItems.map((movie: MovieCardProps) => <MovieCard key={movie.imdbID} {...movie} />);
      default: moviesData.map((movie: MovieCardProps) => <MovieCard key={movie.imdbID} {...movie} />);
    }
  };

  return (
    <>
      <CenterAlignedContainer>
        <Selector
          options={sortingOptions}
          value={selectedOption}
          onChange={setSelectedOption}
        />
      </CenterAlignedContainer>
      <BoxesContainer>
      {!loading && displayMovies(selectedOption)}
      </BoxesContainer>
    </>
  );
};

