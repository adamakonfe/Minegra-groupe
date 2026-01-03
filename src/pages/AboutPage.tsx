import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
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
              <h2 className="text-3xl font-heading font-bold mb-8">
                Le Forage Minier, notre maîtrise
              </h2>
              
              <img
                src={diapo3}
                alt="Forage minier"
                className="w-full mb-8 shadow-lg"
              />
              
              <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                WAUD, une entreprise pionnière dans le domaine du forage minier, se distingue par son engagement
                envers l'excellence et l'innovation. Forte d'une expertise de pointe et d'une équipe passionnée,
                WAUD repousse constamment les limites pour offrir des solutions de forage minier de première classe.
              </p>

              <h3 className="text-2xl font-heading font-bold mb-4">Notre Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                Chez WAUD, notre mission est de fournir des services de forage minier de la plus haute qualité tout
                en respectant les normes les plus strictes en matière de sécurité et d'environnement.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                Nous sommes déterminés à contribuer au succès de nos clients en leur offrant des solutions sur mesure 
                qui optimisent l'efficacité de leurs opérations minières.
              </p>

              <h3 className="text-2xl font-heading font-bold mb-4">Notre Vocation</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                Notre vocation est d'exceller dans le forage minier, le transport de minerai et
                l'ingénierie minière responsable, au service d'opérations efficaces, sûres et durablement maîtrisées.
              </p>

              <h3 className="text-2xl font-heading font-bold mb-4">Technologie de Pointe</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                Nous investissons continuellement dans les technologies les plus avancées pour garantir des résultats
                précis et fiables. Notre parc d'équipements modernes nous permet de répondre aux défis les plus complexes
                de l'industrie minière.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
              
              {/* Extra image */}
              <div className="mt-8">
                <img
                  src={drill1}
                  alt="Équipement de forage"
                  className="w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
