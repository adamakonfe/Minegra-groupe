
import { Search, Phone, Mail, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const services = [
    { title: "Forage", href: "/forage" },
    { title: "Mine", href: "/mine" },
    { title: "Carrière", href: "/carriere" },
    { title: "Logistique", href: "/logistique" },
    { title: "Énergie", href: "/energie" },
    { title: "Conseils", href: "/conseils" },
  ];

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white p-6 shadow-lg border border-border">
        <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary"></div>
          Recherche
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-4 pr-10 py-3 bg-muted border-none focus:ring-1 focus:ring-primary outline-none text-sm"
          />
          <button className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Services Modal/List */}
      <div className="bg-secondary text-white p-6 shadow-lg">
        <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary"></div>
          Nos Services
        </h3>
        <ul className="space-y-1">
          {services.map((service, index) => (
            <li key={index}>
              <Link
                to={service.href}
                className="flex items-center justify-between p-3 border-b border-white/10 hover:bg-white/5 hover:pl-5 transition-all duration-300 group"
              >
                <span className="text-sm font-medium">{service.title}</span>
                <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Widget */}
      <div className="bg-primary p-6 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:bg-white/20 transition-all duration-500"></div>

        <h3 className="text-xl font-heading font-bold mb-6 relative z-10">Besoin d'aide ?</h3>
        <p className="text-sm mb-6 relative z-10 leading-relaxed">
          Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.
        </p>

        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-primary flex items-center justify-center rounded-full flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-black/60">Appelez-nous</p>
              <a href="tel:+22670702983" className="font-bold hover:underline">(00226) 70 70 29 83</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-primary flex items-center justify-center rounded-full flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-black/60">Email</p>
              <a href="mailto:contact@minegragroup.com" className="font-bold text-sm hover:underline">contact@minegragroup.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Widget */}
      <div className="bg-white p-6 shadow-lg border border-border text-center">
        <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-lg font-heading font-bold mb-2">Notre Brochure</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Téléchargez notre brochure pour en savoir plus sur nos services.
        </p>
        <button className="w-full py-3 bg-secondary text-white font-medium uppercase text-sm tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-2">
          Télécharger
          <FileText className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
