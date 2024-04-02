const ImageCard = ({ photo }) => {
  return (
    <>
      <div>
        <img width={250} src={photo.urls.small} alt={photo.alt_description} />
        <h2>Description: {photo.description}</h2>
        <p>
          Likes: <b>{photo.likes}</b>
        </p>
      </div>
    </>
  );
};

export default ImageCard;
