import { faker } from '@faker-js/faker';

export interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
}

export const generateFakeProducts = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    products.push({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      imageUrl: faker.image.url(),
    });
  }

  return products;
};
