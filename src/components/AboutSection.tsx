import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import ceoPortrait from "@/assets/karim.jpeg";
import miningVideo from "@/assets/Transport de Minerais.mp4";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <ScrollAnimation animation="fade-right" duration={800}>
            <div className="relative group">
              {/* Main Image */}
              <div className="relative z-10 img-zoom-container overflow-hidden">
                <video
                  src={miningVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-lg lg:max-w-xl mx-auto lg:mx-0 h-[500px] lg:h-[600px] object-cover shadow-2xl rounded-2xl"
                />
                {/* Gold accent bar */}
                <div className="absolute bottom-0 left-0 w-2 h-full bg-primary transform origin-bottom transition-all duration-700 group-hover:h-1/2" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 hidden lg:block transition-all duration-500 group-hover:bg-primary/20" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-primary hidden lg:block transition-all duration-700 group-hover:scale-110 group-hover:rotate-3" />

              {/* Gold vertical line */}
              <div className="absolute top-1/3 -right-4 w-1 h-24 bg-primary hidden lg:block" />
              <div className="absolute bottom-1/4 -right-4 w-1 h-16 bg-primary/50 hidden lg:block" />
            </div>
          </ScrollAnimation>

          {/* Content Side */}
          <ScrollAnimation animation="fade-left" duration={800} delay={200}>
            <div className="lg:pl-8">
              {/* Section Label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-primary animate-line-grow" />
                <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
                  A Propos
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8">
                Un Service<br />
                <span className="text-primary">Professionnel</span>
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Notre mission est de fournir des services de forage minier de la plus haute qualité
                tout en respectant les normes les plus strictes en matière de sécurité et d'environnement.
                Avec des décennies d'expérience en Afrique de l'Ouest, nous offrons l'excellence à chaque étape.
              </p>



              {/* Contact & CTA */}
              <div className="flex flex-wrap items-center gap-8">
                {/* Phone Contact */}
                <div className="group">
                  <span className="text-sm text-muted-foreground block mb-2 uppercase tracking-wider">
                    Nous contacter :
                  </span>
                  <a
                    href="tel:+22670702983"
                    className="flex items-center gap-4 text-xl font-bold hover:text-primary transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg pulse-glow">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span>(00226) 70 70 29 83</span>
                  </a>
                </div>

                {/* CTA Button */}
                <Link
                  to="/nous"
                  className="btn-primary btn-animated flex items-center gap-3 group"
                >
                  <span>Voir Plus</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
