import { Product, ProductCategory } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "BeeNatural",
    shortDescription: "Pure organic honey.",
    description:
      "This is a high-quality organic honey sourced from sustainable farms.",
    image: {
      hash: "abc123",
      url: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg",
      name: "organic-honey.jpg",
    },
    price: 10.99,
    totalPrice: 10.99,
    salePrice: 8.99,
    category: {
      id: 1,
      name: "Milks & Dairies",
    },
    isFavorite: true,
    rating: 3,
    reviews: 120,
    totalReviews: 150,
    maxAmountPerOrder: 5,
  },
  {
    id: 2,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "EcoHair",
    shortDescription: "Gentle, natural ingredients.",
    description:
      "A shampoo made from natural ingredients, suitable for all hair types.",
    image: {
      hash: "def456",
      url: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-9-2.jpg",
      name: "natural-shampoo.jpg",
    },
    price: 15.49,
    totalPrice: 15.49,
    category: {
      id: 2,
      name: "Coffes & Teas",
    },
    isFavorite: false,
    rating: 4.3,
    reviews: 75,
    totalReviews: 80,
    maxAmountPerOrder: 3,
  },
  {
    id: 3,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "Nature's Brew",
    shortDescription: "Calming herbal blend.",
    description:
      "A soothing blend of natural herbs for a relaxing tea experience.",
    image: {
      hash: "ghi789",
      url: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-5-1.jpg",
      name: "herbal-tea.jpg",
    },
    price: 5.99,
    totalPrice: 5.99,
    category: {
      id: 3,
      name: "Pet Foods",
    },
    isFavorite: true,
    rating: 4.5,
    reviews: 90,
    totalReviews: 95,
    maxAmountPerOrder: 10,
  },
  {
    id: 4,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "EcoDrink",
    shortDescription: "Eco-friendly bottle.",
    description:
      "A durable, eco-friendly water bottle made from stainless steel.",
    image: {
      hash: "jkl012",
      url: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-5-1.jpg",
      name: "reusable-water-bottle.jpg",
    },
    price: 12.99,
    totalPrice: 12.99,
    salePrice: 10.99,
    category: {
      id: 3,
      name: "Pet Foods",
    },
    isFavorite: true,
    rating: 4.8,
    reviews: 150,
    totalReviews: 160,
    maxAmountPerOrder: 4,
  },
  {
    id: 5,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "PlantPower",
    shortDescription: "Plant-based protein.",
    description:
      "A high-quality protein powder made from natural plant sources.",
    image: {
      hash: "mno345",
      url: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-5-1.jpg",
      name: "vegan-protein-powder.jpg",
    },
    price: 20.99,
    totalPrice: 20.99,
    category: {
      id: 3,
      name: "Pet Foods",
    },
    isFavorite: false,
    rating: 4.6,
    reviews: 130,
    totalReviews: 140,
    maxAmountPerOrder: 2,
  },
  {
    id: 6,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "GreenBrush",
    shortDescription: "Biodegradable brush.",
    description:
      "A toothbrush made from bamboo, eco-friendly and biodegradable.",
    image: {
      hash: "pqr678",
      url: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-7-1.jpg",
      name: "eco-friendly-toothbrush.jpg",
    },
    price: 3.99,
    totalPrice: 3.99,
    category: {
      id: 4,
      name: "Meats",
    },
    isFavorite: true,
    rating: 4.2,
    reviews: 50,
    totalReviews: 55,
    maxAmountPerOrder: 6,
  },
  {
    id: 7,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "PureSoap",
    shortDescription: "Natural and fragrant.",
    description:
      "A handmade soap bar made from natural ingredients with a pleasant fragrance.",
    image: {
      hash: "stu901",
      url: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-4-2.jpg",
      name: "handmade-soap.jpg",
    },
    price: 6.99,
    totalPrice: 6.99,
    category: {
      id: 5,
      name: "Vegetables",
    },
    isFavorite: false,
    rating: 4.9,
    reviews: 200,
    totalReviews: 220,
    maxAmountPerOrder: 8,
  },
  {
    id: 8,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "HealthyCrunch",
    shortDescription: "Crunchy and healthy.",
    description:
      "A delicious and healthy granola mix made from organic ingredients.",
    image: {
      hash: "vwx234",
      url: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-3-1.jpg",
      name: "organic-granola.jpg",
    },
    price: 8.99,
    totalPrice: 8.99,
    salePrice: 7.49,
    category: {
      id: 6,
      name: "Fruits",
    },
    isFavorite: true,
    rating: 4.4,
    reviews: 110,
    totalReviews: 120,
    maxAmountPerOrder: 5,
  },
];

export const categoryTabs: ProductCategory[] = [
  {
    id: 1,
    name: "Milks & Dairies",
  },
  {
    id: 2,
    name: "Coffes & Teas",
  },
  {
    id: 3,
    name: "Pet Foods",
  },
  {
    id: 4,
    name: "Meats",
  },
  {
    id: 5,
    name: "Vegetables",
  },
  {
    id: 6,
    name: "Fruits",
  },
];
