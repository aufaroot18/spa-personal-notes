import { func, node, string } from "prop-types";

const Box = ({ as, className, onClick, children }) => {
  if (as === "section")
    return (
      <section className={className && className} onClick={onClick && onClick}>
        {children}
      </section>
    );

  return (
    <div className={className && className} onClick={onClick && onClick}>
      {children}
    </div>
  );
};

Box.propTypes = {
  as: string,
  className: string,
  onClick: func,
  children: node,
};

export default Box;
