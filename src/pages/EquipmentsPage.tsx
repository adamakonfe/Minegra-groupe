import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import excavatrice from "@/assets/excavatrice.jpg";
import foreuse from "@/assets/foreuse.jpg";
import mining2 from "@/assets/mining-2.jpeg";
import mining4 from "@/assets/mining-4.jpeg";
import mining5 from "@/assets/mining-5.jpeg";
import mining6 from "@/assets/mining-6.jpeg";
import diapo1 from "@/assets/diapo-1.jpeg";
import diapo2 from "@/assets/diapo-2.jpeg";
import diapo3 from "@/assets/diapo-3.jpeg";
import drill1 from "@/assets/drill-1.jpeg";

const equipments = [
  { image: mining6, name: "Camion Minier" },
  { image: excavatrice, name: "Excavatrice" },
  { image: foreuse, name: "Foreuse" },
  { image: diapo1, name: "Chargeuse" },
  { image: diapo2, name: "Bulldozer" },
  { image: diapo3, name: "Tombereau" },
  { image: drill1, name: "Machine de Forage" },
  { image: mining4, name: "Concasseur" },
  { image: mining5, name: "Crible" },
];

const EquipmentsPage = () => {
  return (
    <Layout>
      <PageBanner title="Gamme Variée D'équipements" subtitle="MINEGRA GROUP" />

      <div className="py-16 bg-background">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <div className="section-subtitle flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                NOTRE PARC D'ÉQUIPEMENTS
                <div className="gold-line" />
              </div>
              <h2 className="section-title">
                Équipements <span className="text-primary">Modernes</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipments.map((equipment, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                <div className="group">
                  <div className="overflow-hidden shadow-lg">
                    <img
                      src={equipment.image}
                      alt={equipment.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <button className="w-full btn-primary flex items-center justify-center gap-2 mt-0">
                    {equipment.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EquipmentsPage;
