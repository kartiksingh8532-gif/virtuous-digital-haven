import { ServiceCard } from "@/components/ui/service-card";
import criminalLitigationImage from "@/assets/criminal-litigation.jpg";
import civilLitigationImage from "@/assets/civil-litigation.jpg";
import familyDisputesImage from "@/assets/family-disputes.jpg";
import debtRecoveryImage from "@/assets/debt-recovery.jpg";
import realEstateImage from "@/assets/real-estate.jpg";
import arbitrationImage from "@/assets/arbitration.jpg";

export const Services = () => {
  const services = [
    {
      title: "Criminal Litigation",
      description: "Extensive experience representing clients in all types of criminal matters, from bail and FIRs to economic offenses and cyber-crimes.",
      image: criminalLitigationImage
    },
    {
      title: "Civil & Commercial Litigation",
      description: "Strategic advice and robust representation in diverse civil disputes, including recovery suits, injunctions, and property partitions.",
      image: civilLitigationImage
    },
    {
      title: "Family Disputes",
      description: "A sensitive and empathetic approach to divorce, maintenance, domestic violence cases, and other family law matters.",
      image: familyDisputesImage
    },
    {
      title: "Debt Recovery",
      description: "Efficiently handling complex debt recovery cases for financial institutions, corporations, and individuals before DRT, NCLT, and other forums.",
      image: debtRecoveryImage
    },
    {
      title: "Real Estate (RERA)",
      description: "Specialized expertise in matters under RERA, representing developers, homebuyers, and agents to ensure compliance and resolve disputes.",
      image: realEstateImage
    },
    {
      title: "Arbitration & ADR",
      description: "Advocating for efficient and cost-effective dispute resolution through domestic arbitration, mediation, and conciliation.",
      image: arbitrationImage
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-primary mb-4">
          Our Areas of Expertise
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-16">
          We provide comprehensive legal representation across a wide spectrum of practice areas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};