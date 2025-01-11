import { MovieCardProps } from '../components/MovieCard/MovieCard';
import { SORTING_OPTIONS } from '../shared/utils';
import { useState } from 'react';

export const useSortedMovies = (moviesData: MovieCardProps[]) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const sortedAZItems = [...moviesData].sort((a, b) => a.title.localeCompare(b.title));
  const sortedZAItems = [...moviesData].sort((a, b) => a.title.localeCompare(b.title)).reverse();
  const sortedNewestItems = [...moviesData].sort((a, b) => a.year.localeCompare(b.year)).reverse();
  const sortedOldestItems = [...moviesData].sort((a, b) => a.year.localeCompare(b.year));

  const getSortedMovies = (option: string) => {
    switch (option) {
      case SORTING_OPTIONS.SORT_AZ:
        return sortedAZItems;
      case SORTING_OPTIONS.SORT_ZA:
        return sortedZAItems;
      case SORTING_OPTIONS.FROM_NEWEST:
        return sortedNewestItems;
      case SORTING_OPTIONS.FROM_OLDEST:
        return sortedOldestItems;
      default:
        return moviesData;
    }
  };

  const filteredMovies = getSortedMovies(selectedOption).filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return {
    selectedOption,
    setSelectedOption,
    searchTerm,
    setSearchTerm,
    sortedMovies: filteredMovies,
  };
};
