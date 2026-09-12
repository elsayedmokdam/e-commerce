export interface ProductResponse {
  results: number;
  metadata: Metadata;
  data: ProductData[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface ProductData {
  sold?: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  priceAfterDiscount?: number;
  availableColors?: any[];
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

// Specific Product

export interface SpecificProductResponse {
  data: ProductData;
}

export interface Review {
  _id: string;
  rating: number;
  review: string;
  product: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface User {
  _id: string;
  name: string;
}

export interface ReviewResponse {
  data: Review[];
}
