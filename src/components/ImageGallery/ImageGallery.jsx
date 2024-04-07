import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={styles["image-gallery-container"]}>
      {Array.isArray(photos) &&
        photos.map((photo) => (
          <li key={photo.id} className={styles["image-gallery-item"]}>
            <ImageCard photo={photo} onImageClick={onImageClick} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
