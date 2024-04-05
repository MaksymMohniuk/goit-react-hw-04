import axios from "axios";

export const requestPhotos = async () => {
  const { results } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=oGYzQqArk2YQGtYqQNUjoqd5R_WjC4bentc-JV8nvfk"
  );

  return results;
};

export const requestContentByQuery = async (query = "") => {
  const { results } = await axios.get(
    `https://api.unsplash.com/search/photos/?query=${query}&client_id=oGYzQqArk2YQGtYqQNUjoqd5R_WjC4bentc-JV8nvfk`
  );
  return results;
};
