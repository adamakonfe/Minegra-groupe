import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import minegraLogo from "@/assets/minegra-logo.jpg";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "ACCUEIL", href: "/", hasDropdown: false },
  { 
    label: "A PROPOS", 
    href: "/about", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Notre Histoire", href: "/about" },
      { label: "Notre Équipe", href: "/team" },
      { label: "Nos Valeurs", href: "/about#values" },
      { label: "Carrières", href: "/carriere" },
    ]
  },
  { 
    label: "MINING SERVICE", 
    href: "/mining-service", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Forage & Sondage", href: "/forage" },
      { label: "Exploitation Minière", href: "/mine" },
      { label: "Conseil Minier", href: "/conseils" },
      { label: "Tous les Services", href: "/mining-service" },
    ]
  },
  { 
    label: "LOGISTICS", 
    href: "/logistics-solutions", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Transport de Marchandises", href: "/logistique" },
      { label: "Gestion de Flotte", href: "/logistics-solutions" },
      { label: "Équipements Lourds", href: "/equipments" },
      { label: "Solutions Complètes", href: "/logistics-solutions" },
    ]
  },
  { 
    label: "ENERGY", 
    href: "/energy-services", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Énergie Solaire", href: "/energie" },
      { label: "Groupes Électrogènes", href: "/energy-services" },
      { label: "Solutions Hybrides", href: "/energy-services" },
      { label: "Tous les Services", href: "/energy-services" },
    ]
  },
  { label: "ÉQUIPEMENTS", href: "/equipments", hasDropdown: false },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileExpandedItem(mobileExpandedItem === label ? null : label);
  };

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
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`nav-link group ${location.pathname === item.href ? 'text-primary' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div 
                    className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-white shadow-2xl rounded-lg overflow-hidden min-w-[250px] border border-border">
                      {/* Gold top line */}
                      <div className="h-1 bg-primary w-full" />
                      
                      <div className="py-2">
                        {item.dropdownItems.map((dropItem, index) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.href}
                            className="block px-6 py-3 text-secondary hover:text-primary hover:bg-muted transition-all duration-300 relative group/item"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <span className="relative z-10 font-medium">{dropItem.label}</span>
                            {/* Hover indicator */}
                            <span className="absolute left-0 top-0 h-full w-1 bg-primary transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`w-full nav-link py-3 px-4 hover:bg-muted transition-all duration-300 justify-between ${location.pathname === item.href ? 'text-primary bg-muted' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpandedItem === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      <div className={`overflow-hidden transition-all duration-300 bg-muted/50 ${
                        mobileExpandedItem === item.label ? 'max-h-[300px]' : 'max-h-0'
                      }`}>
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.href}
                            className="block py-2.5 px-8 text-secondary hover:text-primary border-l-2 border-transparent hover:border-primary transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`nav-link py-3 px-4 hover:bg-muted transition-all duration-300 ${location.pathname === item.href ? 'text-primary bg-muted' : ''}`}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
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
