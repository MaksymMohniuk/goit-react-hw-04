import styles from "./ImageCard.module.css";

const ImageCard = ({ photo, onImageClick }) => {
  const onClick = () =>
    onImageClick({
      src: photo.urls.regular,
      alt: photo.alt_description,
    });
  return (
    <div className={styles["image-card-container"]}>
      <img
        className={styles["image-card-image"]}
        width={250}
        onClick={onClick}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
      <h2 className={styles["image-card-description"]}>
        Description: {photo.description}
      </h2>
      <p className={styles["image-card-likes"]}>
        Likes: <b>{photo.likes}</b>
      </p>
    </div>
  );
};

export default ImageCard;
