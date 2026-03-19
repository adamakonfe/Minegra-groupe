import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Plus } from "lucide-react";
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
    label: "SERVICES MINIERS",
    href: "/mining-service",
    hasDropdown: false,
    dropdownItems: [
      { label: "Forage & Sondage", href: "/forage" },
      { label: "Exploitation Minière", href: "/mine" },
      { label: "Conseil Minier", href: "/conseils" },
      { label: "Tous les Services", href: "/mining-service" },
    ]
  },
  {
    label: "SOLUTIONS LOGISTIQUES",
    href: "/logistics-solutions",
    hasDropdown: false,
    dropdownItems: [
      { label: "Transport de Marchandises", href: "/logistique" },
      { label: "Gestion de Flotte", href: "/logistics-solutions" },
      { label: "Équipements Lourds", href: "/equipements" },
      { label: "Solutions Complètes", href: "/logistics-solutions" },
    ]
  },
  {
    label: "APPROVISIONNEMENT ÉNERGÉTIQUE",
    href: "/energy-services",
    hasDropdown: false,
    dropdownItems: [
      { label: "Énergie Solaire", href: "/energie" },
      { label: "Groupes Électrogènes", href: "/energy-services" },
      { label: "Solutions Hybrides", href: "/energy-services" },
      { label: "Tous les Services", href: "/energy-services" },
    ]
  },
  { label: "ÉQUIPEMENTS", href: "/equipements", hasDropdown: false },
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
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Single Row Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src={minegraLogo}
              alt="MINEGRA GROUP"
              className="h-14 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - All in one row */}
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
                  className={`flex items-center gap-1 px-1 py-2 text-sm font-bold tracking-wide uppercase transition-all duration-300 relative ${location.pathname === item.href
                    ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary'
                    : 'text-black hover:text-black/70'
                    }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <span className={`text-xs transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-45' : ''}`}>+</span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-300 z-50 ${activeDropdown === item.label
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                      }`}
                  >
                    <div className="bg-white shadow-2xl min-w-[220px] border border-gray-100">
                      <div className="h-1 bg-primary w-full" />
                      <div className="py-1">
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.href}
                            className="block px-5 py-3 text-sm font-medium text-black hover:text-primary hover:bg-gray-50 transition-all duration-300 relative group/item"
                          >
                            <span className="relative z-10">{dropItem.label}</span>
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

          {/* Right Side - Search + Contact Button */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="w-10 h-10 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center text-black">
              <Search className="w-4 h-4" />
            </button>
            <Link
              to="/contacts"
              className="bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-primary transition-all duration-300 transform skew-x-[-5deg]"
            >
              <span className="inline-block skew-x-[5deg]">NOUS CONTACTER</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center text-secondary hover:text-primary transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 border-t border-border">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`w-full flex items-center justify-between py-3 px-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${location.pathname === item.href ? 'text-primary' : 'text-secondary hover:text-primary'
                          }`}
                      >
                        <span>{item.label}</span>
                        <Plus className={`w-4 h-4 transition-transform duration-300 ${mobileExpandedItem === item.label ? 'rotate-45' : ''}`} />
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 bg-muted/50 ${mobileExpandedItem === item.label ? 'max-h-[300px]' : 'max-h-0'
                        }`}>
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.href}
                            className="block py-2.5 px-6 text-sm text-secondary hover:text-primary border-l-2 border-transparent hover:border-primary transition-all duration-300"
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
                      className={`block py-3 px-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${location.pathname === item.href ? 'text-primary' : 'text-secondary hover:text-primary'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contacts"
                className="bg-secondary text-secondary-foreground text-center py-3 mt-4 font-bold text-sm uppercase tracking-wide"
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