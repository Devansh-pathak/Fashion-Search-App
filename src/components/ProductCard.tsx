import React from 'react';
import '../styles/ProductCard.scss';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{price}</p>
        {/* Wishlist button here */}
      </div>
    </div>
  );
};

export default ProductCard;
