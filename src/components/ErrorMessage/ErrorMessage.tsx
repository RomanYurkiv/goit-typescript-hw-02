import css from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.errorWrapper}>
      {
        message
        // <p>
        //   Oops, something went wrong. Give it another shot by refreshing the
        //   page, please!
        // </p>
      }
    </div>
  );
};

export default ErrorMessage;
