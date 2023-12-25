import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WishlistProvider } from './hooks/useWishlist';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <WishlistProvider>
      <HomePage />
    </WishlistProvider>
  );
};

export default App;
