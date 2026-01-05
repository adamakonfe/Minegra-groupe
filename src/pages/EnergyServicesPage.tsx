import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ArrowRight, CheckCircle, Zap, Sun, Battery, Settings } from "lucide-react";
import service2 from "@/assets/service-2.jpeg";

const solutions = [
  {
    icon: Zap,
    title: "Power Generators",
    description: "Industrial generator rental and maintenance services.",
  },
  {
    icon: Sun,
    title: "Solar Energy",
    description: "Photovoltaic systems for remote mining sites.",
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description: "Battery solutions for continuous power supply.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Preventive and corrective maintenance services.",
  },
];

const EnergyServicesPage = () => {
  return (
    <Layout>
      <PageBanner 
        title="ENERGY SUPPLY & SERVICES" 
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Energy Supply & Services" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="section-subtitle flex items-center gap-3">
                <div className="gold-line" />
                ENERGY SOLUTIONS
              </div>
              <h2 className="section-title mb-6">
                Power for <span className="text-primary">Mining Operations</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                MINEGRA GROUP delivers comprehensive energy solutions for mining and 
                industrial sites. From generator supply to solar installations, we 
                ensure reliable power for your operations.
              </p>

              <img 
                src={service2} 
                alt="Energy solutions"
                className="w-full h-80 object-cover mb-12"
              />

              <h3 className="font-heading font-bold text-2xl mb-6">Our Solutions</h3>
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

              <h3 className="font-heading font-bold text-2xl mb-4">Service Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom power system design",
                  "Rapid on-site installation",
                  "Preventive maintenance included",
                  "24/7 emergency support",
                  "Hybrid energy solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                Request Energy Assessment
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

export default EnergyServicesPage;
