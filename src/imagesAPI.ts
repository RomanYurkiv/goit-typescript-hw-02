import axios, { AxiosResponse } from "axios";
import { ImageResponse } from "./components/App/App.types";

const API_KEY = "v5dcLxRJ7u0Q_VONRgfry9-HUAtFT6niLLHl2Z0AuaA";

const getImages = async (
  query: string,
  page: number
): Promise<AxiosResponse<ImageResponse>> => {
  const response = await axios("https://api.unsplash.com/search/photos", {
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