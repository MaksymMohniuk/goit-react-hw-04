import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ modalData, modalIsOpen, closeModal, afterOpenModal }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        afterOpenModal={afterOpenModal}
        onRequestClose={closeModal}
      >
        <div>
          <button onClick={closeModal}>Close Modal</button>
          {modalData && (
            <img width={500} src={modalData.src} alt={modalData.alt} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
