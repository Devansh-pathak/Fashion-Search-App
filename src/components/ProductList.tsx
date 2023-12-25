import React, { useState, useEffect } from 'react';
import { Product, generateFakeProducts } from '../utils/fakeDataGenerator';
import ProductCard from './ProductCard';
import '../styles/ProductList.scss';

interface ProductListProps {
  searchProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ searchProducts }) => {
  const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setProducts(searchProducts);
    }, [searchProducts])
  
    useEffect(() => {
      setLoading(true);
      try {
        const fakeProducts = generateFakeProducts(10);
        setProducts(fakeProducts);
        setLoading(false);
      } catch (e) {
        setError('Failed to fetch products.');
        setLoading(false);
      }
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      {searchProducts.length === 0 ? products.map((product) => (
        <ProductCard key={product.id} {...product} />
      )) : 
      searchProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))
      }
    </div>
  );
};

export default ProductList;

//  if (searchProducts.length === 0) {
//     return <p>No products found. Try a different search!</p>;
//   }