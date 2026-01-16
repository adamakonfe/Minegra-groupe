import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle } from "lucide-react";
import mining5 from "@/assets/mining-5.jpeg";
import mining6 from "@/assets/mining-6.jpeg";

const services = [
  {
    title: "Extraction de Granulats",
    description: "Production de granulats de qualité pour la construction et les travaux publics.",
  },
  {
    title: "Concassage et Criblage",
    description: "Traitement des matériaux pour obtenir différentes granulométries.",
  },
  {
    title: "Transport de Matériaux",
    description: "Livraison de matériaux sur vos chantiers dans les meilleurs délais.",
  },
  {
    title: "Réhabilitation de Sites",
    description: "Remise en état des carrières après exploitation.",
  },
];

const CarrierePage = () => {
  return (
    <Layout>
      <PageBanner 
        title="CARRIÈRE" 
        subtitle="MINEGRA GROUP"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Carrière" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up">
                <div className="section-subtitle flex items-center gap-3">
                  <div className="gold-line" />
                  EXPLOITATION DE CARRIÈRES
                </div>
                <h2 className="section-title mb-6">
                  Granulats et <span className="text-primary">Matériaux de Construction</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={100}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  MINEGRA GROUP exploite des carrières pour la production de granulats et 
                  matériaux de construction de haute qualité. Nous accompagnons les projets 
                  d'infrastructure avec des matériaux conformes aux normes internationales.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <img 
                    src={mining5} 
                    alt="Carrière"
                    className="w-full h-64 object-cover shadow-lg"
                  />
                  <img 
                    src={mining6} 
                    alt="Extraction"
                    className="w-full h-64 object-cover shadow-lg"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <h3 className="font-heading font-bold text-2xl mb-6">Nos Services</h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {services.map((service, index) => (
                    <div key={index} className="border border-border p-6 hover:border-primary transition-colors duration-300">
                      <h4 className="font-heading font-bold text-lg mb-2">{service.title}</h4>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={400}>
                <h3 className="font-heading font-bold text-2xl mb-4">Nos Engagements</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Qualité constante des matériaux produits",
                    "Respect des délais de livraison",
                    "Gestion environnementale responsable",
                    "Prix compétitifs",
                    "Accompagnement technique personnalisé",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={500}>
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

export default CarrierePage;
