import { string, oneOfType, element } from "prop-types";

const LEVEL = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h5",
};

const Heading = ({ as, className, children }) => {
  if (as === LEVEL.H1)
    return <h1 className={className && className}>{children}</h1>;
  if (as === LEVEL.H2)
    return <h2 className={className && className}>{children}</h2>;
  if (as === LEVEL.H3)
    return <h3 className={className && className}>{children}</h3>;
  if (as === LEVEL.H4)
    return <h4 className={className && className}>{children}</h4>;
  if (as === LEVEL.H5)
    return <h5 className={className && className}>{children}</h5>;
  if (as === LEVEL.H6)
    return <h6 className={className && className}>{children}</h6>;

  return <h1>{children}</h1>;
};

Heading.propTypes = {
  as: string,
  className: string,
  children: oneOfType([string, element]),
};

export default Heading;
