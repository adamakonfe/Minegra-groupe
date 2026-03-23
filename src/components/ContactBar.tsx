import { Mail, Phone, MapPin } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-6">
      <div className="container-main">
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:info@minegragroup.com"
            className="flex items-center gap-4 hover:text-primary transition-colors"
          >
            <div className="w-12 h-12 border border-primary/30 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Email</span>
              <span className="font-semibold">info@minegragroup.com</span>
            </div>
          </a>

          <a
            href="tel:+22670702983"
            className="flex items-center gap-4 hover:text-primary transition-colors"
          >
            <div className="w-12 h-12 border border-primary/30 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Téléphone</span>
              <span className="font-semibold">(00226) 70 70 29 83</span>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-primary/30 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Localisation</span>
              <span className="font-semibold">Zone du bois - Ouaga</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
