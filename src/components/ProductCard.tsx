import React, { useState } from 'react';
import '../styles/ProductCard.scss';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, imageUrl }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{price}</p>
        <button
          className={`wishlist-button ${isWishlisted ? 'wishlisted' : ''}`}
          onClick={toggleWishlist}
          aria-label="Add to wishlist"
        >
          {/* Icon can be an SVG or a character like ♥, adjust as needed */}
          ♥
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
