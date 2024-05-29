import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface AppImage {
  id: string;
  urls: {
    full: string;
    thumb: string;
  };
  alt_description: string | null;
}

interface ImageGalleryProps {
  images: AppImage[];
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
        <ImageCard
          image={{
            id: image.id,
            urls: {
              regular: image.urls.full,
              small: image.urls.thumb,
            },
            alt_description: image.alt_description || "",
          }}
          onOpen={() =>
            openModal({
              isModalOpen: true,
              bigImage: image.urls.full,
              imageDescription: image.alt_description || "",
            })
          }
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
