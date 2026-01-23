import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle, Truck, Package, Clock, Shield } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const features = [
  {
    icon: Truck,
    title: "Flotte Moderne",
    description: "Véhicules bien entretenus pour tous types d'opérations de transport lourd.",
  },
  {
    icon: Package,
    title: "Manutention",
    description: "Équipements spécialisés pour le levage et la manipulation de charges lourdes.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Service permanent pour répondre à vos besoins opérationnels.",
  },
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Protocoles de sécurité stricts pour chaque opération de transport.",
  },
];

const LogisticsSolutionsPage = () => {
  return (
    <Layout>
      <PageBanner 
        title="LOGISTICS SOLUTIONS" 
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Logistics Solutions" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up">
                <div className="section-subtitle flex items-center gap-3">
                  <div className="gold-line" />
                  TRANSPORT & LOGISTIQUE
                </div>
                <h2 className="section-title mb-6">
                  Solutions <span className="text-primary">Logistiques Fiables</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={100}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  MINEGRA GROUP exploite une flotte complète de véhicules et d'équipements 
                  pour la logistique minière. Du transport de minerai à la mobilisation 
                  d'équipements lourds, notre expertise logistique garantit des livraisons 
                  sûres et ponctuelles.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <div className="img-zoom-container mb-12">
                  <img 
                    src={heroTruck} 
                    alt="Logistique minière"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-muted card-hover">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={400}>
                <h3 className="font-heading font-bold text-2xl mb-4">Nos Services de Transport</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Transport de minerai et matériaux en vrac",
                    "Équipements lourds et charges hors gabarit",
                    "Location de camions avec chauffeurs professionnels",
                    "Gestion de flotte pour sites miniers",
                    "Mobilisation d'équipements industriels",
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
            
            <ScrollAnimation animation="fade-left">
              <Sidebar />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LogisticsSolutionsPage;