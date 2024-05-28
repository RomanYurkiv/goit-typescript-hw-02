import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div className={css.loadMoreWrapper}>
      <button onClick={onLoadMore} className={css.loadMoreButton} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
