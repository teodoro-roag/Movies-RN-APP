


export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}

export interface CompleteMovie extends Movie {
  genres: string[];
  duration: number; // in minutes
  budget: number; // in USD
  originalTitle: string;
  productionCompanies: string[];
}