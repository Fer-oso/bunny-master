export const Title = ({ children, className }) => {
  return (
    <h2
      className={`font-bold leading-tight tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
};
