import { element, func, string } from "prop-types";

const Select = ({ className, name, value, onChange, children }) => {
  return (
    <select
      className={className && className}
      name={name && name}
      value={value && value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

Select.propTypes = {
  className: string,
  name: string,
  value: string,
  onChange: func,
  children: element,
};

export default Select;
