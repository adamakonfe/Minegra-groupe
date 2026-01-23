import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ContactBar from "@/components/ContactBar";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import teamMember from "@/assets/team-member.jpg";

const teamMembers = [
  { name: "Vincent OUEDRAOGO", role: "CEO" },
  { name: "Raïcha OUEDRAOGO", role: "Assistante CEO" },
  { name: "Moumouni OUEDRAOGO", role: "Chargé de la Sécurité" },
  { name: "Robert SOME", role: "Comptable" },
  { name: "Youmanli YONLI", role: "Gestionnaire de Stock" },
  { name: "Ingrid TRAORE", role: "DRH" },
  { name: "Soumaïla BANOGO", role: "Surintendant de la Production" },
  { name: "Souleymane OUEDRAOGO", role: "HSE" },
];

const TeamPage = () => {
  return (
    <Layout>
      <PageBanner title="Notre Équipe" subtitle="MINEGRA GROUP" />
      
      <div className="py-16 bg-background">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <div className="section-subtitle flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                UNE ÉQUIPE DÉVOUÉE
                <div className="gold-line" />
              </div>
              <h2 className="section-title">
                Les Experts <span className="text-primary">MINEGRA</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="group text-center">
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={teamMember}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      
      <ContactBar />
    </Layout>
  );
};

export default TeamPage;
