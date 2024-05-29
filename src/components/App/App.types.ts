export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
    big: string;
  };
  bigImage: string;
  description: string;
  alt_description: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface AppProps {
  onSearch: (inputValue: string) => Promise<void>;
  images: Image[];
}

export type ImageResponse = {
  total: number;
  total_pages: number;
  results: Image[];
};