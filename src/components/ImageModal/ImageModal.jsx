import { useState } from "react";
import Modal from "react-modal";

const ImageModal = ({ photos }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {photos.map((photo, index) => (
        <div key={index} onClick={() => openModal(photo)}>
          <img
            src={photo.urls.regular}
            alt={photo.alt_description}
            width={500}
          />
        </div>
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div>
          <button onClick={closeModal}>Close Modal</button>
          {selectedPhoto && (
            <img
              width={500}
              src={selectedPhoto.urls.regular}
              alt={selectedPhoto.alt_description}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
