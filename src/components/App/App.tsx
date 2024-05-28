import React, { useState, useEffect } from "react";
import getImages from "./imagesAPI";
import toast, { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<{
    isModalOpen: boolean;
    bigImage: string;
    imageDescription: string;
  } | null>(null);
  const [hasMore, setHasMore] = useState<number>(0);

  async function searchImages(inputValue: string) {
    setQuery(inputValue);
    setImages([]);
    setPage(1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const response = await getImages(query, page);
        const data = response.data;
        if (!data.results.length) {
          toast.error("Oops, something went wrong. Give it another shot.", {
            position: "top-right",
          });
        }
        setImages((prevImages) => [...prevImages, ...data.results]);
        setHasMore(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  function handleLoadMore() {
    setPage(page + 1);
  }

  const openModal = (image: {
    isModalOpen: boolean;
    bigImage: string;
    imageDescription: string;
  }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar onSearch={searchImages} />
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <>
          <ImageGallery images={images} openModal={openModal} />
          {selectedImage && (
            <ImageModal
              isOpen={selectedImage.isModalOpen}
              bigImage={selectedImage.bigImage}
              imageDescription={selectedImage.imageDescription}
              onClose={closeModal}
            />
          )}
          {images.length > 0 && !loading && hasMore > page && (
            <LoadMoreBtn onLoadMore={handleLoadMore} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
