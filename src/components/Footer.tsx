import { Mail, Phone, MapPin, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact">
      {/* Contact Bar with Arrow Shapes */}
      <div className="bg-secondary relative">
        <div className="container-main py-8">
          <div className="flex flex-wrap items-center justify-center gap-0">
            {/* Email Section */}
            <div className="flex items-center">
              <div className="bg-primary py-6 px-8 flex items-center gap-4 relative" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)' }}>
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div className="pr-6">
                  <p className="text-black/70 text-sm">Email</p>
                  <a href="mailto:contact@minegragroup.com" className="text-black font-semibold text-lg hover:underline">
                    contact@minegragroup.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center -ml-4">
              <div className="bg-secondary py-6 px-8 flex items-center gap-4 relative" style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)' }}>
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="pr-6">
                  <p className="text-white/70 text-sm">Téléphone</p>
                  <a href="tel:+22670206487" className="text-white font-semibold text-lg hover:text-primary transition-colors">
                    (00226) 70 20 64 87
                  </a>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex items-center -ml-4">
              <div className="bg-primary py-6 px-8 flex items-center gap-4 relative" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)' }}>
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-black/70 text-sm">Localisation</p>
                  <span className="text-black font-semibold text-lg">Zone du bois - Ouaga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary py-4 relative">
        <div className="container-main">
          <div className="flex items-center justify-center">
            <p className="text-black font-semibold text-sm uppercase tracking-wide">
              COPYRIGHT©{new Date().getFullYear()} MINEGRA GROUP. CONCEPTION ET HÉBERGEMENT: KAAY GROUP SARL
            </p>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-primary transition-all duration-300"
          aria-label="Retour en haut"
        >
          <ChevronUp className="w-5 h-5 text-black hover:text-primary" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
