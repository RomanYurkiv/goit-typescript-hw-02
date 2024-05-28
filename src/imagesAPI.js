import axios from "axios";

const API_KEY = "pldb-kL3ROgQIWhzIV3aMZmwmIiqNDurnmcbD5uTBJ8";

const getImages = async (query, page) => {
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