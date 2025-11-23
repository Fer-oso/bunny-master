import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { heroSlides } from "../../../utils//data/heroSlides";
import { P } from "../../../components/paragraph/P";

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentSlideData = heroSlides[currentSlide];
  const BadgeIcon = currentSlideData.badge.icon;

  return (
    <div
      className={`relative overflow-hidden transition-all duration-1000 bg-gradient-to-br `}
    >
      {/* Navigation Controls */}
      <div className="absolute top-0 right-0 flex items-center gap-4 z-30">
        <button
          onClick={toggleAutoPlay}
          className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 text-gray-700 hover:text-gray-900"
        >
          {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 md:backdrop-blur-sm md:p-4  rounded-full hover:bg-white/30 transition-all duration-300 text-gray-700 hover:text-gray-900 group "
      >
        <ChevronLeft
          size={24}
          className="group-hover:-translate-x-1 transition-transform duration-300"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 md:backdrop-blur-sm md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-gray-700 hover:text-gray-900 group"
      >
        <ChevronRight
          size={24}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </button>

      {/* Slide Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20" >
        <div className="" key={`badge-${currentSlide}`} >
          <span
            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${currentSlideData.badge.color} ${currentSlideData.badge.textColor} rounded-full text-sm font-semibold mb-6 border ${currentSlideData.badge.borderColor} animate-in slide-in-from-top-4 duration-700`}
          >
            <BadgeIcon className="w-4 h-4 mr-2" />
            {currentSlideData.badge.text}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6" key={`title-${currentSlide}`}>
          <span className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] bg-clip-text text-transparent animate-in slide-in-from-left-8 duration-700">
            {currentSlideData.title.line1}
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/80 to-[#46d5e7]/80 bg-clip-text text-transparent animate-in slide-in-from-right-8 duration-700 delay-200">
            {currentSlideData.title.line2}
          </span>
        </h1>

        <P
          className="
          mt-6 mx-auto leading-relaxed animate-in slide-in-from-bottom-6 duration-700 delay-400"
          key={`subtitle-${currentSlide}`}
        >
          {currentSlideData.subtitle}
        </P>
      </div>

      {/* Slide Indicators */}

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-3 z-30 ">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-black shadow-lg"
                : "bg-gray-200 hover:bg-red-100"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1">
        <div
          className="h-full bg-gradient-to-r from-[#ffb8b8] to-[#46d5e7] transition-all duration-300"
          style={{
            width: isAutoPlaying
              ? `${((currentSlide + 1) / heroSlides.length) * 100}%`
              : "0%",
          }}
        />
      </div>
    </div>
  );
};
