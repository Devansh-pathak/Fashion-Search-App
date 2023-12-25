import React, { useState } from 'react';
import '../styles/SearchBar.scss'; // Make sure the path is correct.

interface SearchBarProps {
  searchTerm: string; // Add this line to include searchTerm in your props.
  onSearchSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchSubmit }) => {
  const [inputValue, setInputValue] = useState(searchTerm); // Initialize with searchTerm prop.

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(inputValue);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
