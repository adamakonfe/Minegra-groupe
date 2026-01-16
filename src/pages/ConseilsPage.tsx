import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle, FileText, Users, Target, BarChart } from "lucide-react";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

const expertises = [
  {
    icon: FileText,
    title: "Études de Faisabilité",
    description: "Analyse complète de la viabilité technique et économique de vos projets.",
  },
  {
    icon: Users,
    title: "Formation",
    description: "Programmes de formation pour vos équipes sur les techniques minières.",
  },
  {
    icon: Target,
    title: "Optimisation",
    description: "Amélioration des processus pour maximiser la productivité.",
  },
  {
    icon: BarChart,
    title: "Audit Technique",
    description: "Évaluation de vos opérations et recommandations d'amélioration.",
  },
];

const ConseilsPage = () => {
  return (
    <Layout>
      <PageBanner 
        title="CONSEILS" 
        subtitle="MINEGRA GROUP"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Conseils" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up">
                <div className="section-subtitle flex items-center gap-3">
                  <div className="gold-line" />
                  CONSEIL ET EXPERTISE
                </div>
                <h2 className="section-title mb-6">
                  Expertise <span className="text-primary">Minière</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={100}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Fort de notre expérience dans le secteur minier, MINEGRA GROUP met à votre 
                  disposition une équipe d'experts pour vous accompagner dans tous vos projets. 
                  De l'étude de faisabilité à l'optimisation de vos opérations, nous sommes votre 
                  partenaire stratégique.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <div className="flex flex-col md:flex-row gap-8 mb-12 p-8 bg-muted">
                  <img 
                    src={ceoPortrait} 
                    alt="Expert MINEGRA"
                    className="w-48 h-48 object-cover"
                  />
                  <div>
                    <blockquote className="text-lg italic mb-4">
                      "Notre engagement est d'accompagner nos clients vers l'excellence opérationnelle, 
                      en partageant notre expertise et nos meilleures pratiques du secteur minier."
                    </blockquote>
                    <p className="font-heading font-bold">Vincent K. OUEDRAOGO</p>
                    <p className="text-primary text-sm">Directeur Général</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <h3 className="font-heading font-bold text-2xl mb-6">Nos Domaines d'Expertise</h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {expertises.map((expertise, index) => (
                    <div key={index} className="flex gap-4 p-6 border border-border hover:border-primary transition-colors duration-300">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <expertise.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg mb-1">{expertise.title}</h4>
                        <p className="text-muted-foreground text-sm">{expertise.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={400}>
                <h3 className="font-heading font-bold text-2xl mb-4">Nos Engagements</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Analyse approfondie de vos besoins spécifiques",
                    "Recommandations pragmatiques et réalisables",
                    "Accompagnement dans la mise en œuvre",
                    "Transfert de compétences à vos équipes",
                    "Suivi et évaluation des résultats",
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
                  Prendre rendez-vous
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

export default ConseilsPage;
