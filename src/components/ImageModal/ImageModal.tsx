import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../App/App.types";

interface ImageModalProps {
  image: Image;
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
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className={css.modalContent}
    overlayClassName={css.modalOverlay}
  >
    <div>
      <img src={bigImage} alt={imageDescription} />
      <div className={css.modalInfo}>
        <p>{imageDescription}</p>
      </div>
    </div>
  </Modal>
);

export default ImageModal;
