import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ArrowRight, CheckCircle } from "lucide-react";
import mining1 from "@/assets/mining-1.jpeg";
import mining2 from "@/assets/mining-2.jpeg";
import mining4 from "@/assets/mining-4.jpeg";

const services = [
  {
    title: "Exploitation Minière",
    description: "Services complets d'exploitation pour les mines à ciel ouvert et souterraines.",
    image: mining1,
  },
  {
    title: "Transport de Minerai",
    description: "Logistique de transport efficace pour tous types de minerais.",
    image: mining2,
  },
  {
    title: "Traitement du Minerai",
    description: "Processus de traitement optimisés pour maximiser la récupération.",
    image: mining4,
  },
];

const MinePage = () => {
  return (
    <Layout>
      <PageBanner 
        title="MINE" 
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Mine" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="section-subtitle flex items-center gap-3">
                <div className="gold-line" />
                EXPLOITATION MINIÈRE
              </div>
              <h2 className="section-title mb-6">
                Solutions <span className="text-primary">Minières Complètes</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                MINEGRA GROUP propose des solutions d'exploitation minière de bout en bout, 
                de l'extraction au transport. Notre expertise couvre tous les aspects de 
                l'industrie minière avec un engagement fort envers la durabilité.
              </p>

              <div className="space-y-8 mb-12">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full md:w-64 h-48 object-cover"
                    />
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <a href="/contacts" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        En savoir plus <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-heading font-bold text-2xl mb-4">Pourquoi Nous Choisir</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Expertise de plus de 10 ans dans le secteur minier",
                  "Flotte d'équipements modernes et bien entretenus",
                  "Respect strict des normes environnementales",
                  "Équipe de professionnels certifiés",
                  "Partenariats avec les leaders du secteur",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                Contactez-nous
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

export default MinePage;
