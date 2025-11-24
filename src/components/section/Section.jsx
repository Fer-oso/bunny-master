export const Section = ({ id, classname, children }) => {
  return (
    <section
      className={`container mx-auto px-4 sm:px-6 lg:px-0 py-16 md:py-10 ${classname}`}
      id={id}
    >
      {children}
    </section>
  );
};
