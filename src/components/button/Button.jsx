export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-gradient-to-r ${className} cursor-pointer text-black px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:gap-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
