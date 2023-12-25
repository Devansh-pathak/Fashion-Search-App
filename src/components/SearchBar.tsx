import React, { useState } from 'react';
import '../styles/SearchBar.scss';

interface SearchBarProps {
  onSearchSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(inputValue);
    setInputValue(''); 
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for fashion items"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
