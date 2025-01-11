import { DataContext } from '../components/DataProvider';
import { Selector } from '../components/SortSelector/SortSelector';
import { BoxesContainer, CenterAlignedContainer, Loader } from '../components/styles';
import { sortingOptions } from '../shared/utils';
import { MovieList } from 'components/MovieList';
import { SearchComponent } from 'components/SearchComponent';
import { useSortedMovies } from 'files/useSortedMovies';
import { useContext } from 'react';

export const ListingPage = () => {
  const { moviesData, loading, error } = useContext(DataContext);
  const { selectedOption, setSelectedOption, searchTerm, setSearchTerm, sortedMovies } = useSortedMovies(moviesData);

  if (loading) return <Loader data-testid="loader" position="absolute" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <CenterAlignedContainer>
        <SearchComponent searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Selector options={sortingOptions} value={selectedOption} onChange={setSelectedOption} />
      </CenterAlignedContainer>
      <BoxesContainer>{!loading && <MovieList movies={sortedMovies} />}</BoxesContainer>
    </>
  );
};
