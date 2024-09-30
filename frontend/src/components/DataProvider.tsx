import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MovieCardProps } from './MovieCard/MovieCard';

// Define the context type
interface DataContextType {
  moviesData: MovieCardProps[];
  loading: boolean;
  error: string | null;
}

// Create the context with default values
export const DataContext = createContext<DataContextType>({
  moviesData: [],
  loading: true,
  error: null,
});

// Create a provider component
export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [moviesData, setMoviesData] = useState<MovieCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async() => {
    try {
      const response = await axios.get("http://localhost:4000/api/clips");
      setMoviesData(response.data.moviesList);
    } catch(err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Fetch data from an API
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ moviesData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
