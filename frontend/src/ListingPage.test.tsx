import { render, screen } from '@testing-library/react';
import { DataContext } from './components/DataProvider';
import { ListingPage } from './pages/ListingPage';
import { BrowserRouter } from 'react-router-dom';

const mockMoviesData = [
  { imdbID: '1', title: 'Narcos', year: '2015', poster: 'got.jpg'},
  { imdbID: '2', title: 'Black Mirror', year: '2011', poster: 'b.jpg' },
  { imdbID: '3', title: 'Westworld', year: '2020', poster: 'a.jpg'},
];

const renderComponent = (moviesData = mockMoviesData, loading = false, error = null) => {
  return render(
    
      <DataContext.Provider value={{ moviesData, loading, error }}>
        <BrowserRouter><ListingPage /></BrowserRouter>
      </DataContext.Provider>
    
  );
};

describe('ListingPage', () => {
  test('renders loader when loading is true', () => {
    renderComponent(mockMoviesData, true);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('renders movie cards when movies data is available', () => {
    renderComponent();
    expect(screen.getByText(/Narcos/i)).toBeInTheDocument();
    expect(screen.getByText(/Black Mirror/i)).toBeInTheDocument();
    expect(screen.getByText(/Westworld/i)).toBeInTheDocument();
  });

});
