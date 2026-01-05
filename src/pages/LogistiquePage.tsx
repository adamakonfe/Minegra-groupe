import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ArrowRight, CheckCircle, Truck, Package, Clock, Shield } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const features = [
  {
    icon: Truck,
    title: "Flotte Moderne",
    description: "Véhicules récents et bien entretenus pour tous types de transport.",
  },
  {
    icon: Package,
    title: "Manutention",
    description: "Équipements de levage et manutention pour charges lourdes.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Service disponible en permanence pour répondre à vos besoins.",
  },
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Protocoles de sécurité stricts pour chaque transport.",
  },
];

const LogistiquePage = () => {
  return (
    <Layout>
      <PageBanner 
        title="LOGISTIQUE" 
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Logistique" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="section-subtitle flex items-center gap-3">
                <div className="gold-line" />
                SOLUTIONS LOGISTIQUES
              </div>
              <h2 className="section-title mb-6">
                Transport et <span className="text-primary">Logistique Minière</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                MINEGRA GROUP dispose d'une flotte complète de véhicules et équipements 
                pour assurer le transport de minerais, matériaux et équipements lourds. 
                Notre expertise logistique garantit des livraisons sûres et ponctuelles.
              </p>

              <img 
                src={heroTruck} 
                alt="Logistique minière"
                className="w-full h-80 object-cover mb-12"
              />

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-muted">
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

              <h3 className="font-heading font-bold text-2xl mb-4">Nos Services de Transport</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Transport de minerai et matériaux en vrac",
                  "Convois exceptionnels et charges lourdes",
                  "Location de camions avec chauffeurs",
                  "Gestion de flotte pour sites miniers",
                  "Transport d'équipements industriels",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                Demander un transport
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <Sidebar />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LogistiquePage;
