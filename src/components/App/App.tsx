import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import Modal from "react-modal";
import getImages from "../../imagesAPI";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import { Image, AppProps, ImageResponse } from "./App.types";

Modal.setAppElement("#root");

const App: React.FC<AppProps> = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    isModalOpen: boolean;
    bigImage: string;
    imageDescription: string;
  } | null>(null);
  const [hasMore, setHasMore] = useState<number>(0);

  async function searchImages(inputValue: string): Promise<void> {
    setQuery(inputValue);
    setImages([]);
    setPage(1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchImages(): Promise<void> {
      try {
        setLoading(true);
        setError(null);
        const response: AxiosResponse<ImageResponse> = await getImages(
          query,
          page
        );
        const data: ImageResponse = response.data;
        if (!data.results.length) {
          toast.error("Oops, something went wrong. Give it another shot.", {
            position: "top-right",
          });
        }
        setImages((prevImages) => [...prevImages, ...data.results]);
        setHasMore(data.total_pages);
      } catch (error) {
        setError({ message: (error as Error).message });
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  function handleLoadMore(): void {
    setPage(page + 1);
  }

  const openModal = (data: {
    isModalOpen: boolean;
    bigImage: string;
    imageDescription: string;
  }): void => {
    setSelectedImage(data);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar onSearch={searchImages} />
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          <ImageGallery images={images} openModal={openModal} />
          {selectedImage && (
            <ImageModal
              isOpen={selectedImage.isModalOpen}
              imageDescription={selectedImage.imageDescription}
              onClose={closeModal}
              bigImage={selectedImage.bigImage}
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
