import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ArrowRight, CheckCircle, Truck, Package, Clock, Shield } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const features = [
  {
    icon: Truck,
    title: "Modern Fleet",
    description: "Well-maintained vehicles for all types of heavy transport operations.",
  },
  {
    icon: Package,
    title: "Material Handling",
    description: "Specialized equipment for lifting and handling heavy loads.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service to meet your operational needs.",
  },
  {
    icon: Shield,
    title: "Safety Guaranteed",
    description: "Strict safety protocols for every transport operation.",
  },
];

const LogisticsSolutionsPage = () => {
  return (
    <Layout>
      <PageBanner 
        title="LOGISTICS SOLUTIONS" 
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Logistics Solutions" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="section-subtitle flex items-center gap-3">
                <div className="gold-line" />
                TRANSPORT & LOGISTICS
              </div>
              <h2 className="section-title mb-6">
                Reliable <span className="text-primary">Logistics Solutions</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                MINEGRA GROUP operates a comprehensive fleet of vehicles and equipment 
                for mining logistics. From ore transport to heavy equipment mobilization, 
                our logistics expertise ensures safe and timely deliveries.
              </p>

              <img 
                src={heroTruck} 
                alt="Mining logistics"
                className="w-full h-80 object-cover mb-12"
              />

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-muted">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-heading font-bold text-2xl mb-4">Our Transport Services</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Ore and bulk material transport",
                  "Heavy equipment and oversize loads",
                  "Truck rental with professional drivers",
                  "Fleet management for mining sites",
                  "Industrial equipment mobilization",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                Get a Transport Quote
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

export default LogisticsSolutionsPage;
