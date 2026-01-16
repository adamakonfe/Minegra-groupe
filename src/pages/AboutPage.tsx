import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import diapo3 from "@/assets/diapo-3.jpeg";
import drill1 from "@/assets/drill-1.jpeg";

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up">
                <div className="section-subtitle flex items-center gap-3 mb-4">
                  <div className="gold-line" />
                  NOTRE EXPERTISE
                </div>
                <h2 className="section-title mb-8">
                  Le Forage Minier, <span className="text-primary">Notre Maîtrise</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={100}>
                <img
                  src={diapo3}
                  alt="Forage minier"
                  className="w-full mb-8 shadow-lg"
                />
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={200}>
                <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                  MINEGRA GROUP, une entreprise pionnière dans le domaine du forage minier, se distingue par son engagement
                  envers l'excellence et l'innovation. Forte d'une expertise de pointe et d'une équipe passionnée,
                  MINEGRA GROUP repousse constamment les limites pour offrir des solutions de forage minier de première classe.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <h3 className="text-2xl font-heading font-bold mb-4">Notre Mission</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                  Chez MINEGRA GROUP, notre mission est de fournir des services de forage minier de la plus haute qualité tout
                  en respectant les normes les plus strictes en matière de sécurité et d'environnement.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                  Nous sommes déterminés à contribuer au succès de nos clients en leur offrant des solutions sur mesure 
                  qui optimisent l'efficacité de leurs opérations minières.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={400}>
                <h3 className="text-2xl font-heading font-bold mb-4">Notre Vocation</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                  Notre vocation est d'exceller dans le forage minier, le transport de minerai et
                  l'ingénierie minière responsable, au service d'opérations efficaces, sûres et durablement maîtrisées.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={500}>
                <h3 className="text-2xl font-heading font-bold mb-4">Technologie de Pointe</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                  Nous investissons continuellement dans les technologies les plus avancées pour garantir des résultats
                  précis et fiables. Notre parc d'équipements modernes nous permet de répondre aux défis les plus complexes
                  de l'industrie minière.
                </p>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollAnimation animation="fade-left">
                <Sidebar />
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={200}>
                <div className="mt-8">
                  <img
                    src={drill1}
                    alt="Équipement de forage"
                    className="w-full shadow-lg"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
