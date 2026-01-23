import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle, Zap, Sun, Battery, Settings } from "lucide-react";
import service2 from "@/assets/service-2.jpeg";

const solutions = [
  {
    icon: Zap,
    title: "Groupes Électrogènes",
    description: "Location et maintenance de générateurs industriels.",
  },
  {
    icon: Sun,
    title: "Énergie Solaire",
    description: "Systèmes photovoltaïques pour sites miniers isolés.",
  },
  {
    icon: Battery,
    title: "Stockage d'Énergie",
    description: "Solutions de batteries pour alimentation continue.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Services de maintenance préventive et corrective.",
  },
];

const EnergyServicesPage = () => {
  return (
    <Layout>
      <PageBanner 
        title="ENERGY SUPPLY & SERVICES" 
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Energy Supply & Services" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up">
                <div className="section-subtitle flex items-center gap-3">
                  <div className="gold-line" />
                  SOLUTIONS ÉNERGÉTIQUES
                </div>
                <h2 className="section-title mb-6">
                  Énergie pour <span className="text-primary">Opérations Minières</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={100}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  MINEGRA GROUP fournit des solutions énergétiques complètes pour les sites 
                  miniers et industriels. De la fourniture de générateurs aux installations 
                  solaires, nous garantissons une alimentation fiable pour vos opérations.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <div className="img-zoom-container mb-12">
                  <img 
                    src={service2} 
                    alt="Solutions énergétiques"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <h3 className="font-heading font-bold text-2xl mb-6">Nos Solutions</h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {solutions.map((solution, index) => (
                    <div key={index} className="border border-border p-6 hover:border-primary transition-colors group card-hover">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <solution.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h4 className="font-heading font-bold text-lg mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground text-sm">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={400}>
                <h3 className="font-heading font-bold text-2xl mb-4">Avantages du Service</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Conception de systèmes électriques sur mesure",
                    "Installation rapide sur site",
                    "Maintenance préventive incluse",
                    "Support d'urgence 24/7",
                    "Solutions énergétiques hybrides",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                  Demander une Évaluation
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

export default EnergyServicesPage;