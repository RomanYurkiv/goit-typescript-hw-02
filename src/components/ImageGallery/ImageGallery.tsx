import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (data: {
    isModalOpen: boolean;
    bigImage: string;
    imageDescription: string;
  }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => (
  <ul className={css.galleryList}>
    {images.map((image) => (
      <li className={css.galleryListItem} key={image.id}>
        <ImageCard image={image} onOpen={openModal} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
