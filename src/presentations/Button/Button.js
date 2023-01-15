import { string, func, oneOfType, element } from "prop-types";

const Button = ({ type, title, className, onClick, children }) => {
  return (
    <button
      type={type ? type : "button"}
      title={title && title}
      className={className && className}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: string,
  title: string,
  className: string,
  onClick: func,
  children: oneOfType([string, element]),
};

export default Button;
