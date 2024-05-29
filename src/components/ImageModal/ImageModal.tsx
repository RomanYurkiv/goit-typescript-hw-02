import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  bigImage: string;
  imageDescription: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  bigImage,
  imageDescription,
  onClose,
}) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} className={css.modal}>
    <button onClick={onClose} className={css.closeButton}>
      Close
    </button>
    <img src={bigImage} alt={imageDescription} className={css.image} />
    <p>{imageDescription}</p>
  </Modal>
);

export default ImageModal;
