// types.ts file
export type shopCategory = {
  id: number;
  name: string;
  totalProducts: number;
};

export type Image = {
  hash: string;
  url: string;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: Image;
  price: number;
  totalPrice: number;
  salePrice?: number;
  category: shopCategory;
  rating: number;
  reviews: number;
  maxAmountPerOrder?: number;
};
