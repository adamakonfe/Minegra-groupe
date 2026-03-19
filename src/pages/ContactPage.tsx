import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Phone, Mail, MapPin, User, Send } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import diapo1 from "@/assets/diapo-1.jpeg";
import teamMember from "@/assets/team-member.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Remplace ces identifiants par ceux que tu vas obtenir sur ton compte EmailJS (https://www.emailjs.com/)
      const serviceId = "VOTRE_SERVICE_ID";
      const templateId = "VOTRE_TEMPLATE_ID";
      const publicKey = "VOTRE_PUBLIC_KEY";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert("Votre message a été envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur est survenue. Veuillez vérifier vos identifiants EmailJS ou réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageBanner title="Contactez-Nous" subtitle="MINEGRA GROUP" />

      {/* Contact Cards */}
      <div className="py-16 bg-background">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Call Card */}
            <ScrollAnimation animation="fade-up" delay={0}>
              <div className="relative overflow-hidden group h-64">
                <img
                  src={diapo1}
                  alt="Nous appeler"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border border-primary/50 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary text-sm block">Nous Appeler</span>
                      <a href="tel:+22670702983" className="font-semibold text-lg hover:text-primary transition-colors">
                        (+226) 70 70 29 83
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Email Card */}
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="relative overflow-hidden group h-64">
                <img
                  src={teamMember}
                  alt="Nous écrire"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border border-primary/50 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary text-sm block">Nous Écrire</span>
                      <a href="mailto:contact@minegragroup.com" className="font-semibold text-lg hover:text-primary transition-colors">
                        info@Minegragroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Location Card */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="relative overflow-hidden group h-64">
                <img
                  src={diapo1}
                  alt="Siège"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border border-primary/50 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary text-sm block">Siège Social</span>
                      <span className="font-semibold text-lg">Ouagadougou, Burkina Faso</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-muted">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <div className="section-subtitle flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                NOUS ÉCRIRE DIRECTEMENT
                <div className="gold-line" />
              </div>
              <h2 className="section-title">Utilisez Le Formulaire Ci-Dessous</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary inline-flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
