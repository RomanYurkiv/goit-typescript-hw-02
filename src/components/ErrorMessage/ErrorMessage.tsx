import React from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={css.errorWrapper}>
      <p>
        Oops, something went wrong. Give it another shot by refreshing the page,
        please!
      </p>
    </div>
  );
};

export default ErrorMessage;
