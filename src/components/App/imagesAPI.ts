import axios, { AxiosResponse } from "axios";

const API_KEY = "pldb-kL3ROgQIWhzIV3aMZmwmIiqNDurnmcbD5uTBJ8";


interface UnsplashImage {
  id: string;
  description: string | null;
  urls: {
    full: string;
    thumb: string;
    [key: string]: string;
  };
  [key: string]: any;
}

interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

const getImages = async (query: string, page: number): Promise<AxiosResponse<UnsplashResponse>> => {
  const response = await axios.get<UnsplashResponse>("https://api.unsplash.com/search/photos", {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: 12,
    },
  });
  return response;
};

export default getImages;
