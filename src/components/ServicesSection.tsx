import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpeg";
import service2 from "@/assets/service-2.jpeg";
import service3 from "@/assets/service-3.jpeg";

const services = [
  {
    id: 1,
    title: "GRADE CONTROL",
    description: "Productize inexpensive business vista cooperative benefits globally maintain leading edge schemas.",
    image: service2,
    href: "#",
  },
  {
    id: 2,
    title: "DRILL AND BLAST",
    description: "Productize inexpensive business vista cooperative benefits globally maintain leading edge schemas.",
    image: service3,
    href: "#",
  },
  {
    id: 3,
    title: "REVERSE CIRCULATION",
    description: "Productize inexpensive business vista cooperative benefits globally maintain leading edge schemas.",
    image: service2,
    href: "#",
  },
  {
    id: 4,
    title: "DIAMOND DRILLING",
    description: "Productize inexpensive business vista cooperative benefits globally maintain leading edge schemas.",
    image: service1,
    href: "#",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted">
      <div className="container-wau">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-subtitle flex items-center justify-center gap-3">
            <div className="gold-line" />
            NOS SERVICES
            <div className="gold-line" />
          </div>
          <h2 className="section-title">
            Ce que nous <span className="text-primary">offrons</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card group h-80">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <h3 className="font-heading font-bold text-xl mb-3 text-secondary-foreground">
                  <a href={service.href} className="hover:text-primary transition-colors">
                    {service.title}
                  </a>
                </h3>
                <p className="text-sm text-secondary-foreground/80 mb-4 line-clamp-2">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Voir plus
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
