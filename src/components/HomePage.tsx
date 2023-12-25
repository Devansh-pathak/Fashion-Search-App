import React from 'react';
import { useSearch } from '../hooks/useSearch';
import { useBackgroundImages } from '../hooks/useBackgroundImages';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import '../styles/HomePage.scss'; // Make sure this path is correct

const HomePage: React.FC = () => {
  const { backgroundImages, currentImageIndex } = useBackgroundImages();
  const { searchTerm, setSearchTerm, searchResults, executeSearch } = useSearch();

  const handleSearchSubmit = (term: string) => {
    setSearchTerm(term);
    executeSearch(term);
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]?.url})`,
  };

  return (
    <div className="home-page" style={backgroundStyle}>
      <div className="home-header">
        <h1 className="hero-title">Welcome to Fashion Search App</h1>
        <SearchBar searchTerm={searchTerm} onSearchSubmit={handleSearchSubmit} />
      </div>
      <section className="trending">
        <h2>Trending Now</h2>
        <ProductList searchProducts={searchResults} />
      </section>
    </div>
  );
};

export default HomePage;
