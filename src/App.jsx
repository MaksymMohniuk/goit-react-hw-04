import "./App.css";
import { useEffect, useState } from "react";
import { requestPhotos } from "./services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const data = requestPhotos();
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
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </>
  );
};

export default App;
