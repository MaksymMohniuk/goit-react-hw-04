import axios from "axios";

export const requestPhotos = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=oGYzQqArk2YQGtYqQNUjoqd5R_WjC4bentc-JV8nvfk"
  );

  return data;
};