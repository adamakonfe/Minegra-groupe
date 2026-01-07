import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import { ArrowRight, CheckCircle } from "lucide-react";
import drill1 from "@/assets/drill-1.jpeg";
import drill2 from "@/assets/drill-2.jpeg";
import mining1 from "@/assets/mining-1.jpeg";
import mining2 from "@/assets/mining-2.jpeg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Grade Control",
    description: "Precise grade control services to optimize mineral extraction and maximize ore recovery.",
    image: drill1,
  },
  {
    title: "Drill & Blast",
    description: "Professional drilling and blasting operations for mining and quarry projects.",
    image: drill2,
  },
  {
    title: "Reverse Circulation",
    description: "RC drilling for exploration and production with high sample quality.",
    image: mining1,
  },
  {
    title: "Diamond Drilling",
    description: "Core drilling services for geological exploration and resource evaluation.",
    image: mining2,
  },
];

const MiningServicePage = () => {
  return (
    <Layout>
      <PageBanner 
        title="MINING SERVICE" 
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Mining Service" },
        ]} 
      />
      
      <section className="py-16 lg:py-24">
        <div className="container-wau">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up" duration={600}>
                <div className="section-subtitle flex items-center gap-3">
                  <div className="gold-line" />
                  OUR MINING SERVICES
                </div>
                <h2 className="section-title mb-6">
                  Complete <span className="text-primary">Mining Solutions</span>
                </h2>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  MINEGRA GROUP provides comprehensive mining services across West Africa. 
                  From exploration drilling to full-scale mining operations, our experienced 
                  team delivers excellence at every stage of your mining project.
                </p>
              </ScrollAnimation>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {services.map((service, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 100} duration={600}>
                    <div className="group bg-muted p-6 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 h-full">
                      <div className="overflow-hidden mb-4">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-80">{service.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              <ScrollAnimation animation="fade-up" duration={600}>
                <h3 className="font-heading font-bold text-2xl mb-4">Why Choose Us</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "State-of-the-art drilling equipment",
                    "Highly qualified and experienced personnel",
                    "Strict safety and environmental standards",
                    "Accurate and timely results",
                    "24/7 operational support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animation="fade-left" delay={200} duration={600}>
              <Sidebar />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MiningServicePage;
