export const Title = ({ children, className }) => {
  return (
    <h1
      className={`font-bold leading-tight tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
};
