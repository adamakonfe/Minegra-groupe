import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import mining1 from "@/assets/mining-1.jpeg";
import mining2 from "@/assets/mining-2.jpeg";
import mining4 from "@/assets/mining-4.jpeg";
import mining5 from "@/assets/mining-5.jpeg";
import mining6 from "@/assets/mining-6.jpeg";
import diapo1 from "@/assets/diapo-1.jpeg";
import diapo2 from "@/assets/diapo-2.jpeg";
import diapo3 from "@/assets/diapo-3.jpeg";
import drill1 from "@/assets/drill-1.jpeg";
import drill2 from "@/assets/drill-2.jpeg";

const equipments = [
  mining6,
  mining1,
  mining2,
  diapo1,
  diapo2,
  diapo3,
  drill1,
  drill2,
  mining4,
  mining5,
];

const EquipmentsPage = () => {
  return (
    <Layout>
      <PageBanner title="Gamme Variée D'équipements" subtitle="NOTRE ÉQUIPEMENT" />
      
      <div className="py-16 bg-background">
        <div className="container-wau">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipments.map((equipment, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden shadow-lg">
                  <img
                    src={equipment}
                    alt={`Équipement ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <button className="w-full btn-primary flex items-center justify-center gap-2 mt-0">
                  VOIR PLUS
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EquipmentsPage;
