import { useEffect, useState, useRef } from "react";
import { Calendar, Users, Award, Globe, Truck, HardHat } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 3,
    suffix: "+",
    label: "Années d'Expérience",
    description: "D'expertise dans le secteur minier",
  },
  {
    icon: Award,
    value: 100,
    suffix: "+",
    label: "Projets Réalisés",
    description: "Partout en Afrique de l'Ouest",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Clients Satisfaits",
    description: "Taux de satisfaction client",
  },
  {
    icon: HardHat,
    value: 50,
    suffix: "+",
    label: "Employés Qualifiés",
    description: "Experts dans leur domaine",
  },
  {
    icon: Globe,
    value: 8,
    suffix: "",
    label: "Pays Couverts",
    description: "Présence en Afrique",
  },
  {
    icon: Truck,
    value: 50,
    suffix: "+",
    label: "Équipements",
    description: "Flotte moderne et performante",
  },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/50 rounded-full" />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-[0.3em] uppercase mb-4">
            NOS CHIFFRES CLÉS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6">
            L'Excellence en <span className="text-primary">Chiffres</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Depuis plus de 3 ans, MINEGRA GROUP s'engage à fournir des services de qualité exceptionnelle dans le secteur minier africain.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-primary ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gold Corner */}
              <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-12 h-1 bg-primary transform -rotate-45 origin-top-left translate-y-4" />
              </div>

              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Counter */}
              <div className="text-center mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>

              {/* Label */}
              <h3 className="text-sm md:text-base font-heading font-bold text-secondary text-center mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-muted-foreground text-center hidden lg:block">
                {stat.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
