export interface IComment {
    _id: string;
    stars: number;
    content: string;
    review_count?: number;
    average_score?: number;
    fullname: string;
    avatar?: string;
    productId: string;
    success?: boolean;
    message?: string;
  }
  