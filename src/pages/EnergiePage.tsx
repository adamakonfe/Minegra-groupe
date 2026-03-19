import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ArrowRight, CheckCircle, Zap, Sun, Battery, Settings } from "lucide-react";
import groupeElectrogene from "@/assets/groupe electrogene.jpg";

const solutions = [
  {
    icon: Zap,
    title: "Groupes Électrogènes",
    description: "Location et maintenance de groupes électrogènes industriels.",
  },
  //... (omitting unchanging lines for brevity in thought, but tool needs exact content) 
  // Actually I should split this into two replacements or use multi_replace if I can't match a contiguous block. 
  // The import is at line 5, usage is at line 60. They are far apart.
  // I will use multi_replace_file_content for EnergiePage.tsx.
  {
    icon: Sun,
    title: "Énergie Solaire",
    description: "Installation de systèmes photovoltaïques pour sites isolés.",
  },
  {
    icon: Battery,
    title: "Stockage d'Énergie",
    description: "Solutions de stockage pour une alimentation continue.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Entretien préventif et curatif de vos installations.",
  },
];

const EnergiePage = () => {
  return (
    <Layout>
      <PageBanner
        title="ENERGIE"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Energie" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="section-subtitle flex items-center gap-3">
                <div className="gold-line" />
                SOLUTIONS ÉNERGÉTIQUES
              </div>
              <h2 className="section-title mb-6">
                Énergie pour <span className="text-primary">l'Industrie Minière</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                MINEGRA GROUP propose des solutions énergétiques complètes pour les sites miniers
                et industriels. De la fourniture de groupes électrogènes aux installations solaires,
                nous garantissons une alimentation fiable pour vos opérations.
              </p>

              <img
                src={groupeElectrogene}
                alt="Solutions énergétiques"
                className="w-full h-80 object-cover mb-12"
              />

              <h3 className="font-heading font-bold text-2xl mb-6">Nos Solutions</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {solutions.map((solution, index) => (
                  <div key={index} className="border border-border p-6 hover:border-primary transition-colors group">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <solution.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h4 className="font-heading font-bold text-lg mb-2">{solution.title}</h4>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading font-bold text-2xl mb-4">Avantages de Nos Services</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Études et dimensionnement personnalisés",
                  "Installation rapide sur site",
                  "Maintenance préventive incluse",
                  "Service d'urgence 24h/24",
                  "Solutions hybrides adaptées",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                Demander une étude
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

export default EnergiePage;
