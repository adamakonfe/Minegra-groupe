import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpeg";
import service2 from "@/assets/service-2.jpeg";
import service3 from "@/assets/service-3.jpeg";
import mining1 from "@/assets/mining-1.jpeg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    id: 1,
    title: "MINING SERVICE",
    subtitle: "Opérations Minières",
    description: "Services professionnels d'opérations minières avec équipements de pointe et personnel expérimenté.",
    image: service2,
    href: "/mining-service",
  },
  {
    id: 2,
    title: "LOGISTICS SOLUTIONS",
    subtitle: "Transport & Logistique",
    description: "Solutions complètes de transport et logistique pour les opérations minières en Afrique de l'Ouest.",
    image: service3,
    href: "/logistics-solutions",
  },
  {
    id: 3,
    title: "ENERGY SUPPLY",
    subtitle: "Approvisionnement Énergétique",
    description: "Solutions énergétiques fiables pour maintenir vos opérations en fonctionnement optimal.",
    image: mining1,
    href: "/energy-services",
  },
  {
    id: 4,
    title: "CONSULTING",
    subtitle: "Conseil & Expertise",
    description: "Services de conseil expert pour les projets miniers, de l'exploration à la production.",
    image: service1,
    href: "/conseils",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-wau relative z-10">
        {/* Section Header - WAU Style */}
        <ScrollAnimation animation="fade-up" duration={600}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
                Nos Services
              </span>
              <div className="w-12 h-1 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Ce Que Nous <span className="text-primary">Offrons</span>
            </h2>
          </div>
        </ScrollAnimation>

        {/* Services Grid - WAU Style Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={service.id} 
              animation="fade-up" 
              delay={index * 150}
              duration={600}
            >
              <Link 
                to={service.href}
                className="service-card group h-[420px] block relative"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/98 group-hover:via-black/70" />
                
                {/* Gold Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-primary border-l-[60px] border-l-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                  {/* Gold Line */}
                  <div className="w-12 h-1 bg-primary mb-4 transition-all duration-500 group-hover:w-20" />
                  
                  {/* Subtitle */}
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.subtitle}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white mb-3 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm mb-5 line-clamp-2 opacity-0 transform translate-y-4 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider opacity-0 transform translate-y-4 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                    <span>En Savoir Plus</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="text-center mt-16">
            <Link 
              to="/mining-service" 
              className="btn-primary btn-wau inline-flex items-center gap-3 group"
            >
              <span>Voir Tous Nos Services</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;
