export const BackgroundDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-200/15 rounded-full blur-3xl transform translate-x-1/2" />
    </div>
  );
};
