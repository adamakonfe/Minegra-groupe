import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import diapo1 from "@/assets/diapo-1.jpeg";
import diapo2 from "@/assets/diapo-2.jpeg";

const slides = [
  {
    id: 1,
    title: ["Notre Vocation", "Les Opérations Minières"],
    image: heroTruck,
    link: "/mining-service",
  },
  {
    id: 2,
    title: ["Tout Type", "de Transport de Minerai"],
    image: diapo1,
    link: "/logistics-solutions",
  },
  {
    id: 3,
    title: ["Un Personnel", "Qualifié et Passionné"],
    image: diapo2,
    link: "/team",
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
          className={`hero-slide ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title.join(" ")}
            className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${index === currentSlide ? "scale-110" : "scale-100"
              }`}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}


      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container-main">
          <div className="max-w-4xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ease-out ${index === currentSlide && !isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12 absolute pointer-events-none"
                  }`}
              >
                {index === currentSlide && (
                  <>
                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight mb-8">
                      <span className="text-primary block animate-fade-in">
                        {slide.title[0]}
                      </span>
                      <span
                        className="text-white block animate-fade-in"
                        style={{ animationDelay: '0.2s' }}
                      >
                        {slide.title[1]}
                      </span>
                    </h1>

                    {/* Buttons */}
                    <div
                      className="flex flex-wrap gap-4 animate-fade-in"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <Link
                        to={slide.link}
                        className="btn-primary btn-animated flex items-center gap-3 group"
                      >
                        <span>Voir Plus</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                      </Link>
                      <Link
                        to="/contacts"
                        className="btn-outline flex items-center gap-3 group"
                      >
                        <span>Nous Contacter</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators - vertical dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${index === currentSlide
              ? "border-primary bg-primary scale-125"
              : "border-white/60 bg-transparent hover:border-white hover:scale-110"
              }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          >
            {index === currentSlide && (
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute left-8 bottom-20 z-20 hidden md:flex items-center gap-4 text-white">
        <span className="text-4xl font-heading font-bold text-primary">
          0{currentSlide + 1}
        </span>
        <div className="w-16 h-0.5 bg-white/30">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="text-lg text-white/60">0{slides.length}</span>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-14 h-14 border-2 border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 group"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6 text-white animate-bounce group-hover:text-primary" />
      </button>
    </section>
  );
};

export default HeroSlider;
