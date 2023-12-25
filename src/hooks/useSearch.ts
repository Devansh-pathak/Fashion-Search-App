// src/hooks/useSearch.ts

import { useState } from 'react';
import { Product, generateFakeProducts } from '../utils/fakeDataGenerator';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const executeSearch = (term: string) => {
    if (term.trim() === '') {
      setSearchResults(generateFakeProducts(10));
    } else {
      const allProducts = generateFakeProducts(50);
      const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    executeSearch,
  };
};
