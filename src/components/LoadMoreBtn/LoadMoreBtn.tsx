import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onLoadMore();
  };
  return (
    <div className={css.loadMoreWrapper}>
      <button
        onClick={handleClick}
        className={css.loadMoreButton}
        type="button"
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
