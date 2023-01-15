import { element, func, oneOfType, string } from "prop-types";

const Text = ({ className, onClick, children }) => {
  return (
    <p className={className && className} onClick={onClick && onClick}>
      {children}
    </p>
  );
};

Text.propTypes = {
  className: string,
  onClick: func,
  children: oneOfType([string, element]),
};

export default Text;
