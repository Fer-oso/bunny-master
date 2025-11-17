export const Separator = ({ className }) => {
  return (
    <div className={`flex justify-center  ${className}`}>
      <div
        className="h-0.5 w-full
        bg-gradient-to-r from-[#ffb8b8] to-[#46d5e7]/80 
        rounded-full  
        "
      />
    </div>
  );
};
