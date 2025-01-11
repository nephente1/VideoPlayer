import { Input } from './styles';
import React, { ChangeEvent } from 'react';

interface SearchComponentProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchComponent = ({ searchTerm, onSearchChange }: SearchComponentProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return <Input type="text" placeholder="Search by movie title..." value={searchTerm} onChange={handleInputChange} />;
};
