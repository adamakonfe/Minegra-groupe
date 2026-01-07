import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpeg";
import service2 from "@/assets/service-2.jpeg";
import service3 from "@/assets/service-3.jpeg";
import mining1 from "@/assets/mining-1.jpeg";

const services = [
  {
    id: 1,
    title: "MINING SERVICE",
    description: "Professional mining operations with state-of-the-art equipment and experienced personnel.",
    image: service2,
    href: "/mining-service",
  },
  {
    id: 2,
    title: "LOGISTICS SOLUTIONS",
    description: "Complete transportation and logistics services for mining operations across West Africa.",
    image: service3,
    href: "/logistics-solutions",
  },
  {
    id: 3,
    title: "ENERGY SUPPLY",
    description: "Reliable power solutions and energy services to keep your operations running smoothly.",
    image: mining1,
    href: "/energy-services",
  },
  {
    id: 4,
    title: "CONSULTING",
    description: "Expert advisory services for mining projects from exploration to production.",
    image: service1,
    href: "/mining-service",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted">
      <div className="container-wau">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-subtitle flex items-center justify-center gap-3">
            <div className="gold-line gold-line-animated" />
            <span>OUR SERVICES</span>
            <div className="gold-line gold-line-animated" />
          </div>
          <h2 className="section-title">
            What We <span className="text-primary">Offer</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card group h-96"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <div className="w-12 h-1 bg-primary mb-4 transition-all duration-300 group-hover:w-20" />
                <h3 className="font-heading font-bold text-xl mb-3">
                  <Link to={service.href} className="hover:text-primary transition-colors duration-300">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-sm opacity-80 mb-4 line-clamp-2 transition-all duration-300 group-hover:opacity-100">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider group-hover:gap-4 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
