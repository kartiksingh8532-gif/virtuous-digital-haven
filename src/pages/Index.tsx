import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Mission } from "@/components/sections/Mission";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerModal } from "@/components/modals/DisclaimerModal";
import { TeamModal } from "@/components/modals/TeamModal";
import { useState, useEffect } from "react";

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState<string | null>(null);

  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem('disclaimerAccepted');
    if (!disclaimerAccepted) {
      setShowDisclaimer(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    setShowDisclaimer(false);
    document.body.style.overflow = 'unset';
    localStorage.setItem('disclaimerAccepted', 'true');
  };

  const handleTeamMemberClick = (memberId: string) => {
    setSelectedTeamMember(memberId);
  };

  const handleCloseTeamModal = () => {
    setSelectedTeamMember(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Mission />
        <Team onTeamMemberClick={handleTeamMemberClick} />
        <Contact />
      </main>
      <Footer />
      
      {showDisclaimer && (
        <DisclaimerModal onAccept={handleAcceptDisclaimer} />
      )}
      
      {selectedTeamMember && (
        <TeamModal
          memberId={selectedTeamMember}
          onClose={handleCloseTeamModal}
        />
      )}
    </div>
  );
};

export default Index;