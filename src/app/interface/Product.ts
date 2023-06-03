export interface IProduct {
  _id: string;
  productName: string;
  price: number;
  image: string;
  review_count?: number;
  average_score?: number;
  slug?: string;
  description: string;
  categoryId: string;
  success?: boolean;
  message?: string;
}
