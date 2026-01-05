import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import minegraLogo from "@/assets/minegra-logo.jpg";

const navItems = [
  { label: "FORAGE", href: "/forage", hasDropdown: true },
  { label: "MINE", href: "/mine", hasDropdown: true },
  { label: "CARRIÈRE", href: "/carriere", hasDropdown: true },
  { label: "LOGISTIQUE", href: "/logistique", hasDropdown: true },
  { label: "ENERGIE", href: "/energie", hasDropdown: true },
  { label: "CONSEILS", href: "/conseils", hasDropdown: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background sticky top-0 z-50 shadow-lg">
      <div className="container-wau">
        {/* Logo Section with Company Name */}
        <div className="flex items-center justify-between py-6 border-b border-primary">
          <Link to="/" className="flex items-center gap-6">
            <img src={minegraLogo} alt="MINEGRA GROUP" className="h-20 w-auto" />
            <div className="hidden md:block">
              <h1 className="text-[#1e3a5f] font-heading font-bold text-3xl lg:text-4xl tracking-wide">
                MINEGRA GROUP
              </h1>
              <p className="text-[#b8860b] font-heading text-sm lg:text-base tracking-widest mt-1">
                FORAGE - MINE - CARRIÈRE - LOGISTIQUE - ENERGIE - CONSEILS
              </p>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'text-primary' : ''}`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contacts"
              className="btn-primary"
            >
              NOUS CONTACTER
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link py-2 ${location.pathname === item.href ? 'text-primary' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contacts" className="btn-primary text-center mt-4" onClick={() => setIsOpen(false)}>
                NOUS CONTACTER
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
