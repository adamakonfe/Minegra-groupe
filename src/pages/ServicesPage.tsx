import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import service3 from "@/assets/service-3.jpeg";

const services = [
  {
    title: "Forage Minier Professionnel",
    description: "Une précision inégalée pour vos projets de forage.",
  },
  {
    title: "Ingénierie Minière",
    description: "Solutions techniques et stratégiques pour optimiser vos opérations minières.",
  },
  {
    title: "Transport de Minerai",
    description: "Gestion logistique efficace pour le transport sécurisé de vos minerais.",
  },
  {
    title: "Gestion de Fosse Minière",
    description: "Expertise dans la planification et la gestion des fosses pour maximiser la productivité.",
  },
  {
    title: "Solutions Écoresponsables",
    description: "Engagement envers des pratiques respectueuses de l'environnement.",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold mb-8">
                Nos services
              </h2>
              
              <img
                src={service3}
                alt="Services de forage"
                className="w-full mb-8 shadow-lg"
              />
              
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="font-heading font-bold text-lg mb-2">
                      {service.title} :
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
