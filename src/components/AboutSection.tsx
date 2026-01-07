import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container-wau">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollAnimation animation="fade-right" duration={800}>
            <div className="relative group">
              <div className="relative z-10 img-zoom-container">
                <img
                  src={ceoPortrait}
                  alt="CEO MINEGRA GROUP"
                  className="w-full max-w-md mx-auto lg:mx-0 shadow-2xl"
                />
              </div>
              {/* Decorative elements - WAU style */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 hidden lg:block transition-all duration-500 group-hover:bg-primary/30" />
              <div className="absolute -top-6 -left-6 w-28 h-28 border-4 border-primary hidden lg:block transition-all duration-500 group-hover:scale-110" />
              <div className="absolute top-1/2 -right-4 w-2 h-24 bg-primary hidden lg:block" />
            </div>
          </ScrollAnimation>

          {/* Content Side */}
          <ScrollAnimation animation="fade-left" duration={800} delay={200}>
            <div className="lg:pl-8">
              <div className="section-subtitle flex items-center gap-3">
                <div className="gold-line gold-line-animated" />
                <span>About Us</span>
              </div>
              <h2 className="section-title mb-6">
                Professional <br />
                <span className="text-primary">Service Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our mission is to provide the highest quality mining services
                while adhering to the strictest safety and environmental standards.
                With decades of experience in West Africa, we deliver excellence at every stage.
              </p>

              {/* CEO Info */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-muted rounded-sm transition-all duration-300 hover:bg-muted/80">
                <img
                  src={ceoPortrait}
                  alt="CEO"
                  className="w-20 h-20 rounded-full object-cover border-3 border-primary shadow-lg"
                />
                <div>
                  <h4 className="font-heading font-bold text-xl">Leadership Team</h4>
                  <span className="text-primary text-sm uppercase tracking-wider font-semibold">MINEGRA GROUP</span>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="group">
                  <span className="text-sm text-muted-foreground block mb-2">Contact us:</span>
                  <a
                    href="tel:+22670206487"
                    className="flex items-center gap-3 text-lg font-semibold hover:text-primary transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    (00226) 70 20 64 87
                  </a>
                </div>
                <Link to="/mining-service" className="btn-primary">
                  Learn More
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
