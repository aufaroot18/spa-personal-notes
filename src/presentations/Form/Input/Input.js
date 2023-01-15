import { func, string } from "prop-types";

const DEFAULT_TYPE = "text";

const Input = ({ className, name, type, placeholder, value, onChange }) => {
  return (
    <input
      className={className && className}
      name={name && name}
      type={type ? type : DEFAULT_TYPE}
      placeholder={placeholder && placeholder}
      value={value && value}
      onChange={onChange && onChange}
    />
  );
};

Input.propTypes = {
  className: string,
  name: string,
  type: string,
  placeholder: string,
  value: string,
  onChange: func,
};

export default Input;
