import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://api.unsplash.com/photos/?client_id=oGYzQqArk2YQGtYqQNUjoqd5R_WjC4bentc-JV8nvfk"
        );
        setPhotos(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  return (
    <>
      {isLoading && (
        <div>
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {isError && <p>Oops, something went wrong!</p>}
      <ul>
        {Array.isArray(photos) &&
          photos.map((photo) => {
            return (
              <li key={photo.id}>
                <img
                  width={250}
                  src={photo.urls.small}
                  alt={photo.alt_description}
                />
                <h2>Description: {photo.description}</h2>
                <p>
                  Likes: <b>{photo.likes}</b>
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default App;
