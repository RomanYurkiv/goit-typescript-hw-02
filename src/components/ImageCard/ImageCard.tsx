import React from "react";

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string | null;
}

interface ImageCardProps {
  image: Image;
  onOpen: (data: {
    isModalOpen: boolean;
    bigImage: string;
    imageDescription: string;
  }) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onOpen }) => (
  <div>
    <img
      onClick={() =>
        onOpen({
          isModalOpen: true,
          bigImage: image.urls.regular,
          imageDescription: image.alt_description || "",
        })
      }
      src={image.urls.small}
      alt={image.alt_description || "Image"}
    />
  </div>
);

export default ImageCard;
