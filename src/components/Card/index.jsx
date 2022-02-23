import "./style.css";

export const Card = ({ children, className }) => {
  return <div className={`Card ${className}`}>{children}</div>;
};
