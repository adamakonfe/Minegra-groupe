import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container-wau">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={ceoPortrait}
                alt="CEO WAU Drilling"
                className="w-full max-w-md mx-auto lg:mx-0 shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <div className="section-subtitle flex items-center gap-3">
              <div className="gold-line" />
              A propos
            </div>
            <h2 className="section-title mb-6">
              Un Service <br />
              <span className="text-primary">Professionnel</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Notre mission est de fournir des services de forage minier de la plus haute qualité
              tout en respectant les normes les plus strictes en matière de sécurité et d'environnement.
            </p>

            {/* CEO Info */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src={ceoPortrait}
                alt="Vincent K. OUEDRAOGO"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h4 className="font-heading font-semibold text-lg">Vincent K. OUEDRAOGO</h4>
                <span className="text-primary text-sm uppercase tracking-wider">CEO</span>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-sm text-muted-foreground block mb-1">Nous contacter :</span>
                <a
                  href="tel:+22670206487"
                  className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  (00226) 70 20 64 87
                </a>
              </div>
              <Link to="/nous" className="btn-primary">
                Voir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
