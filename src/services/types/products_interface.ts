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
  category: CategoryData;
  brand: BrandData;
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

export interface CategoryData {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface BrandData {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
