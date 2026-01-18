import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import minegraLogo from "@/assets/minegra-logo.jpg";

const navItems = [
  { label: "ACCUEIL", href: "/", hasDropdown: false },
  { label: "A PROPOS", href: "/about", hasDropdown: true },
  { label: "MINING SERVICE", href: "/mining-service", hasDropdown: true },
  { label: "LOGISTICS", href: "/logistics-solutions", hasDropdown: true },
  { label: "ENERGY", href: "/energy-services", hasDropdown: true },
  { label: "ÉQUIPE", href: "/team", hasDropdown: false },
  { label: "ÉQUIPEMENTS", href: "/equipments", hasDropdown: false },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-background sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container-wau">
        {/* Logo Section with Company Name */}
        <div className="flex items-center justify-between py-4 lg:py-6 border-b border-border">
          <Link to="/" className="flex items-center gap-4 lg:gap-6 group">
            <div className="relative overflow-hidden">
              <img 
                src={minegraLogo} 
                alt="MINEGRA GROUP" 
                className="h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-secondary font-heading font-bold text-2xl lg:text-3xl xl:text-4xl tracking-wide transition-colors duration-300 group-hover:text-primary">
                MINEGRA GROUP
              </h1>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-sm border border-border hover:border-primary hover:text-primary transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`nav-link group ${location.pathname === item.href ? 'text-primary' : ''}`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contacts"
              className="btn-primary btn-wau flex items-center gap-2"
            >
              <span>NOUS CONTACTER</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link py-3 px-4 hover:bg-muted transition-all duration-300 stagger-${index + 1} ${location.pathname === item.href ? 'text-primary bg-muted' : ''}`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-auto" />}
                </Link>
              ))}
              <Link 
                to="/contacts" 
                className="btn-primary text-center mt-4 mx-4" 
                onClick={() => setIsOpen(false)}
              >
                NOUS CONTACTER
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
