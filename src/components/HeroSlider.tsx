import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const slides = [
  {
    id: 1,
    title: ["Notre vocation", "Les opérations minières"],
    image: heroTruck,
  },
  {
    id: 2,
    title: ["Tout type", "de Transport de minerai"],
    image: heroTruck,
  },
  {
    id: 3,
    title: ["Un personnel", "qualifié et passionné"],
    image: heroTruck,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
      ))}

      {/* Gold Corner Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden z-20">
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary transform rotate-45" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-secondary-foreground">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {index === currentSlide && (
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-shadow">
                  <span className="text-primary">{slide.title[0]}</span>
                  <br />
                  <span className="text-secondary-foreground">{slide.title[1]}</span>
                </h1>
              )}
            </div>
          ))}
          
          <div className="flex justify-center gap-4 mt-8">
            <a href="#about" className="btn-primary">
              Voir plus
            </a>
            <a href="#contact" className="btn-outline">
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all ${
              index === currentSlide
                ? "bg-secondary-foreground border-secondary-foreground scale-125"
                : "border-secondary-foreground/50 hover:border-secondary-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-12 h-12 border-2 border-secondary-foreground/50 rounded-full flex items-center justify-center text-secondary-foreground hover:border-primary hover:text-primary transition-colors animate-pulse-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;
