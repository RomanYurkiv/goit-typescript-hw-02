
export interface Image {
  id: string;
  urls: {
    full: string;
    thumb: string;
    regular?: string;
    small?: string;
  };
  alt_description: string | null;
  description: string | null;
  bigImage?: string;
}

export interface ImageResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface AppProps {}
