import { Folder } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarLinks = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/nous" },
  { label: "Mining Service", href: "/mining-service" },
  { label: "Logistics Solutions", href: "/logistics-solutions" },
  { label: "Energy Supply", href: "/energy-services" },
  { label: "Notre équipe", href: "/equipe" },
  { label: "Nos équipements", href: "/equipements" },
];

interface SidebarProps {
  showContact?: boolean;
}

const Sidebar = ({ showContact = true }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside className="space-y-8">
      {/* Navigation */}
      <div className="bg-background border border-border p-6">
        <h3 className="font-heading font-bold text-xl mb-2 text-[#1e3a5f]">MINEGRA</h3>
        <div className="w-12 h-1 bg-primary mb-6" />
        <nav className="space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`flex items-center gap-3 py-3 border-b border-border transition-colors ${
                location.pathname === link.href 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Folder className="w-4 h-4" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Contact Box */}
      {showContact && (
        <div className="bg-secondary text-secondary-foreground p-8 text-center">
          <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold">?</span>
          </div>
          <h4 className="font-heading font-semibold text-lg mb-2">
            Besoin d'aide?
          </h4>
          <p className="text-secondary-foreground/80 mb-6">Contactez-nous !</p>
          
          <div className="space-y-4 text-left">
            <div>
              <span className="text-xs text-secondary-foreground/60 uppercase tracking-wider">MOBILE</span>
              <a 
                href="tel:+22670000000" 
                className="block text-primary font-semibold hover:underline"
              >
                +226 70 00 00 00
              </a>
            </div>
            <div>
              <span className="text-xs text-secondary-foreground/60 uppercase tracking-wider">EMAIL</span>
              <a 
                href="mailto:contact@minegragroup.com" 
                className="block text-primary font-semibold hover:underline"
              >
                contact@minegragroup.com
              </a>
            </div>
          </div>
          
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 btn-primary mt-6"
          >
            NOUS CONTACTER
            <span>→</span>
          </Link>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;