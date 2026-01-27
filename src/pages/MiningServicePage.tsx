import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ArrowRight, CheckCircle } from "lucide-react";
import drill1 from "@/assets/drill-1.jpeg";
import drill2 from "@/assets/drill-2.jpeg";
import mining1 from "@/assets/mining-1.jpeg";
import mining2 from "@/assets/mining-2.jpeg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Contrôle de Teneur",
    description: "Services de contrôle de teneur précis pour optimiser l'extraction minière et maximiser la récupération du minerai.",
    image: drill1,
  },
  {
    title: "Forage & Dynamitage",
    description: "Opérations professionnelles de forage et dynamitage pour les projets miniers et de carrière.",
    image: drill2,
  },
  {
    title: "Circulation Inverse",
    description: "Forage RC pour l'exploration et la production avec des échantillons de haute qualité.",
    image: mining1,
  },
  {
    title: "Forage au Diamant",
    description: "Services de carottage pour l'exploration géologique et l'évaluation des ressources.",
    image: mining2,
  },
];

const MiningServicePage = () => {
  return (
    <Layout>
      <PageBanner 
        title="SERVICE MINIER" 
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Service Minier" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up" duration={600}>
                <div className="section-subtitle flex items-center gap-3">
                  <div className="gold-line" />
                  NOS SERVICES MINIERS
                </div>
                <h2 className="section-title mb-6">
                  Solutions <span className="text-primary">Minières Complètes</span>
                </h2>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  MINEGRA GROUP fournit des services miniers complets en Afrique de l'Ouest. 
                  Du forage d'exploration aux opérations minières à grande échelle, notre équipe 
                  expérimentée assure l'excellence à chaque étape de votre projet minier.
                </p>
              </ScrollAnimation>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {services.map((service, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 100} duration={600}>
                    <div className="group bg-muted p-6 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 h-full">
                      <div className="overflow-hidden mb-4">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-80">{service.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              <ScrollAnimation animation="fade-up" duration={600}>
                <h3 className="font-heading font-bold text-2xl mb-4">Pourquoi Nous Choisir</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Équipements de forage de pointe",
                    "Personnel hautement qualifié et expérimenté",
                    "Normes strictes de sécurité et d'environnement",
                    "Résultats précis et dans les délais",
                    "Support opérationnel 24/7",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                  Demander un Devis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animation="fade-left" delay={200} duration={600}>
              <Sidebar />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MiningServicePage;
