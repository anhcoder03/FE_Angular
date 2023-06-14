export interface INews {
    _id: string;
    title: string;
    image: string;
    review_count?: number;
    average_score?: number;
    slug?: string;
    date?: string;
    description: string;
    success?: boolean;
    message?: string;
  }
  