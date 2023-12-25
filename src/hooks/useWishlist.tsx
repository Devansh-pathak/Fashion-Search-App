import React, { createContext, useContext, useState } from 'react';

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
}

interface WishlistProviderType {
    children: React.ReactNode
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<WishlistProviderType> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToWishlist = (id: string) => {
    setWishlist((currentWishlist) => [...currentWishlist, id]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((currentWishlist) => currentWishlist.filter((item) => item !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
