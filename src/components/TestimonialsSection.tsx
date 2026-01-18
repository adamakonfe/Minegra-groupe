import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import teamMember from "@/assets/team-member.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jean-Pierre Mbeki",
    role: "Directeur des Opérations",
    company: "Katanga Mining",
    image: teamMember,
    quote: "MINEGRA GROUP a transformé nos opérations minières avec leur expertise exceptionnelle. Leur équipe professionnelle et leurs équipements de pointe ont considérablement amélioré notre productivité.",
  },
  {
    id: 2,
    name: "Marie Lumumba",
    role: "Chef de Projet",
    company: "Congo Resources",
    image: teamMember,
    quote: "La qualité du service et l'engagement de MINEGRA GROUP sont remarquables. Ils ont livré notre projet dans les délais et avec une précision exceptionnelle.",
  },
  {
    id: 3,
    name: "Patrick Kabila",
    role: "Ingénieur Principal",
    company: "African Minerals Corp",
    image: teamMember,
    quote: "Nous travaillons avec MINEGRA GROUP depuis 5 ans. Leur fiabilité et leur expertise technique font d'eux un partenaire de confiance pour tous nos projets de forage.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wau relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            TÉMOIGNAGES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Ce Que Disent Nos <span className="text-primary">Clients</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Quote className="w-8 h-8 text-secondary" />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 md:p-12 pt-16 border border-white/10">
              <div 
                className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}
              >
                {/* Quote Text */}
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 text-center leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-white/60 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-secondary" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:text-secondary" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
