import "./App.css";
import { useEffect, useState } from "react";
import { requestPhotos } from "./services/api";
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { requestContentByQuery } from "./services/api.js";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const data = await requestPhotos();
        setPhotos(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  useEffect(() => {
    if (!query.length) return;
    async function fetchContentByQuery() {
      try {
        setIsLoading(true);
        const data = await requestContentByQuery(query);
        setPhotos(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchContentByQuery();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </>
  );
};

export default App;
