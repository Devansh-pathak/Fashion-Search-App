// src/components/HomePage.tsx

import React from 'react';
import { useSearch } from '../hooks/useSearch';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import '../styles/HomePage.scss'; 

const HomePage: React.FC = () => {
  const { searchTerm, setSearchTerm, searchResults, executeSearch } = useSearch();

  const handleSearchSubmit = (term: string) => {
    setSearchTerm(term);
    executeSearch(term);
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the Fashion Search App</h1>
        <SearchBar onSearchSubmit={handleSearchSubmit} />
      </header>
      <section className="trending">
        <h2>Trending Now</h2>
        <ProductList searchProducts={searchResults} />
      </section>
    </div>
  );
};

export default HomePage;
