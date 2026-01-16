import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle } from "lucide-react";
import drill1 from "@/assets/drill-1.jpeg";
import drill2 from "@/assets/drill-2.jpeg";
import service1 from "@/assets/service-1.jpeg";

const services = [
  {
    title: "Grade Control",
    description: "Contrôle précis de la teneur pour optimiser l'extraction minière.",
    image: drill1,
  },
  {
    title: "Drill and Blast",
    description: "Services de forage et dynamitage pour les opérations minières.",
    image: drill2,
  },
  {
    title: "Reverse Circulation",
    description: "Forage à circulation inverse pour l'exploration et la production.",
    image: service1,
  },
  {
    title: "Diamond Drilling",
    description: "Forage au diamant pour les échantillons de haute qualité.",
    image: drill1,
  },
];

const ForagePage = () => {
  return (
    <Layout>
      <PageBanner 
        title="FORAGE" 
        subtitle="MINEGRA GROUP"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Forage" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up">
                <div className="section-subtitle flex items-center gap-3">
                  <div className="gold-line" />
                  NOS SERVICES DE FORAGE
                </div>
                <h2 className="section-title mb-6">
                  Expertise en <span className="text-primary">Forage Minier</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={100}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  MINEGRA GROUP offre une gamme complète de services de forage adaptés aux besoins 
                  de l'industrie minière. Notre équipe d'experts utilise des équipements de pointe 
                  pour garantir des résultats précis et fiables.
                </p>
              </ScrollAnimation>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {services.map((service, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                    <div className="group bg-muted p-6 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover mb-4 transition-transform duration-500 group-hover:scale-105"
                      />
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-80">{service.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              <ScrollAnimation animation="fade-up">
                <h3 className="font-heading font-bold text-2xl mb-4">Nos Avantages</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Équipements modernes et performants",
                    "Personnel qualifié et expérimenté",
                    "Respect des normes de sécurité",
                    "Résultats précis et rapides",
                    "Service disponible 24/7",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={100}>
                <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animation="fade-left">
              <Sidebar />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForagePage;
