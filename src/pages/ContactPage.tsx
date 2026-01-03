import { useState } from "react";
import { Phone, Mail, MapPin, User, Send } from "lucide-react";
import Layout from "@/components/Layout";
import diapo1 from "@/assets/diapo-1.jpeg";
import teamMember from "@/assets/team-member.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Contact Cards */}
      <div className="py-16 bg-background">
        <div className="container-wau">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Call Card */}
            <div className="relative overflow-hidden group">
              <img
                src={diapo1}
                alt="Nous appeler"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-secondary/60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-primary/50 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary text-sm block">Nous Appeler</span>
                    <a href="tel:+22625409006" className="font-semibold text-lg hover:text-primary transition-colors">
                      (+226) 25 40 90 06
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="relative overflow-hidden group">
              <img
                src={teamMember}
                alt="Nous écrire"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-secondary/60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-primary/50 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary text-sm block">Nous Écrire</span>
                    <a href="mailto:contact@waudrilling.com" className="font-semibold text-lg hover:text-primary transition-colors">
                      contact@waudrilling.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="relative overflow-hidden group">
              <img
                src={diapo1}
                alt="Siège"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-secondary/60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-primary/50 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary text-sm block">Siège</span>
                    <span className="font-semibold text-lg">Zone du bois</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-muted">
        <div className="container-wau">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="text-primary uppercase tracking-widest text-sm font-semibold">
                NOUS ÉCRIRE DIRECTEMENT
              </span>
              <div className="gold-line" />
            </div>
            <h2 className="section-title">Utilisez Le Formulaire Ci-Dessous</h2>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Entrer Votre Nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 pr-12 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 pr-12 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Votre Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-6 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn-primary inline-flex items-center gap-2">
                Envoyer
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
