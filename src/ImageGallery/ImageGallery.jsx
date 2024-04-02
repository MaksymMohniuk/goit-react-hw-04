import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
        photos.map((photo) => {
          <li key={photo.id}>
            <ImageCard photos={photos} />
          </li>;
        })}
    </ul>
  );
};

export default ImageGallery;
