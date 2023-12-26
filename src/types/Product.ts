// src/types/Product.ts
// src/types/Product.ts

export interface Product {
    id: string;
    name: string; // Use 'name' instead of 'title'
    price: string;
    imageUrl: string;
    // ... other properties
  }
  
  
  export interface Filters {
    // Define your Filters interface here
    brands: string[];
    priceRange: {
      min: number;
      max: number;
    };
    ratings: number;
    // Add other filter properties as needed
  }
  