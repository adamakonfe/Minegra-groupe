import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import diapo1 from "@/assets/diapo-1.jpeg";
import diapo2 from "@/assets/diapo-2.jpeg";

const slides = [
  {
    id: 1,
    title: ["Our Expertise", "Mining Operations"],
    image: heroTruck,
  },
  {
    id: 2,
    title: ["Complete", "Logistics Solutions"],
    image: diapo1,
  },
  {
    id: 3,
    title: ["Reliable", "Energy Supply"],
    image: diapo2,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title.join(" ")}
            className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
      ))}

      {/* Gold Corner Decoration - matching WAU style */}
      <div className="absolute top-0 right-0 w-48 h-48 overflow-hidden z-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary transform rotate-45 shadow-lg" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-out ${
                index === currentSlide && !isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12 absolute pointer-events-none"
              }`}
            >
              {index === currentSlide && (
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-shadow leading-tight">
                  <span className="text-primary block animate-fade-in">{slide.title[0]}</span>
                  <span className="text-white block animate-fade-in" style={{ animationDelay: '0.2s' }}>{slide.title[1]}</span>
                </h1>
              )}
            </div>
          ))}
          
          <div className="flex justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/mining-service" className="btn-primary">
              Learn More
            </Link>
            <Link to="/contacts" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators - WAU style vertical dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-150"
                : "bg-transparent opacity-60 hover:opacity-100 hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Button - WAU style animated arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-14 h-14 border-2 border-white/50 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white/10 group"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 text-white animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSlider;
