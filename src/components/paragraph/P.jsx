export const P = ({ children, className }) => {
  return (
    <p
      className={`text-sm sm:text-base md:text-lg text-primary-color font-medium max-w-2xl leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
};
