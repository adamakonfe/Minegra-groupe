import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import africaLogo from "@/assets/africa-logo.png";

const navItems = [
  { label: "ACCUEIL", href: "#", hasDropdown: true },
  { label: "A PROPOS", href: "#about", hasDropdown: true },
  { label: "DRILLING", href: "#services", hasDropdown: true },
  { label: "MINING", href: "#", hasDropdown: true },
  { label: "NOTRE ÉQUIPE", href: "#", hasDropdown: true },
  { label: "NOS ÉQUIPEMENTS", href: "#", hasDropdown: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-lg">
      <div className="container-wau">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={africaLogo} alt="WAU Drilling" className="h-16 w-auto" />
            <div className="hidden sm:block">
              <span className="text-primary font-heading font-bold text-lg leading-tight block">
                West African
              </span>
              <span className="text-primary font-heading font-bold text-lg leading-tight block">
                United Drilling
              </span>
              <span className="text-primary font-heading text-sm">sarl</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
            <a
              href="#contact"
              className="hidden sm:block btn-primary"
            >
              NOUS CONTACTER
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center mt-4">
                NOUS CONTACTER
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
