export const H2 = ({ children, className }) => {
  return (
    <h2
      className={`font-bold leading-tight tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
};
