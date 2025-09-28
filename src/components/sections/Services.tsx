import { ServiceCard } from "@/components/ui/service-card";
import criminalLitigationImage from "@/assets/criminal-litigation.jpg";
import civilLitigationImage from "@/assets/civil-litigation.jpg";
import familyDisputesImage from "@/assets/family-disputes.jpg";
import debtRecoveryImage from "@/assets/debt-recovery.jpg";
import realEstateImage from "@/assets/real-estate.jpg";
import arbitrationImage from "@/assets/arbitration.jpg";
import consumerDisputesImage from "@/assets/consumer-disputes.jpg";
import trademarkCopyrightImage from "@/assets/trademark-copyright.jpg";
import proBonoImage from "@/assets/pro-bono.jpg";
import developmentAuthoritiesImage from "@/assets/development-authorities.jpg";
import propertyTitleSearchImage from "@/assets/property-title-search.jpg";

export const Services = () => {
  const services = [
    {
      title: "Criminal Litigation",
      description: "VLP has extensive experience in representing clients in various types of Criminal matters, in all courts of Delhi NCR. The team comprises of efficient professionals and qualified advocates, who have excellent skills to handle cases of criminal and quasi criminal nature.",
      image: criminalLitigationImage
    },
    {
      title: "Civil & Commercial Litigation",
      description: "At VLP, we bring comprehensive expertise in handling diverse civil disputes across all jurisdictions of Delhi NCR including High Court and District Courts. We have represented our clientele in a broad spectrum of civil disputes, focusing on strategic legal advice and robust representation.",
      image: civilLitigationImage
    },
    {
      title: "Consumer Disputes",
      description: "Our firm is deeply committed towards protecting consumer rights and pursuing justice in cases of defective goods, deficient services, and unfair trade practices. The team works with precision to file and defend cases before Consumer Dispute Redressal Commissions at District, State, and National levels.",
      image: consumerDisputesImage
    },
    {
      title: "Family Disputes",
      description: "With a sensitive, confidential, and empathetic approach, the firm provides strategic legal counsel and robust representation in all facets of family law. Our seasoned professionals offer unwavering support during what are often emotionally challenging proceedings.",
      image: familyDisputesImage
    },
    {
      title: "Debt Recovery or Settlement",
      description: "Our dedicated team efficiently handles complex debt recovery cases for financial institutions, corporations, individual lenders, and creditors. With a deep understanding of banking, finance, and insolvency laws, we provide end-to-end support in enforcing recoveries.",
      image: debtRecoveryImage
    },
    {
      title: "Arbitration",
      description: "The firm strongly advocates for efficient and cost-effective resolution of disputes through various arbitration and ADR mechanisms. Our practice encompasses domestic arbitration proceedings, as well as mediation and conciliation.",
      image: arbitrationImage
    },
    {
      title: "Real Estate Matters",
      description: "Our firm possesses specialized expertise in handling matters under the Real Estate (Regulation and Development) Act, 2016 (RERA), a landmark legislation aimed at regulating the real estate sector and protecting the interests of homebuyers.",
      image: realEstateImage
    },
    {
      title: "Trademark & Copyright",
      description: "Comprehensive intellectual property services including trademark and copyright registration, protection, and enforcement to safeguard your intellectual assets.",
      image: trademarkCopyrightImage
    },
    {
      title: "Pro Bono Matters",
      description: "At VLP, while the pursuit of legal excellence for our clients is paramount, we believe true excellence extends to serving the voiceless, challenging injustice, and strengthening the fabric of our society.",
      image: proBonoImage
    },
    {
      title: "Development Authorities Advisory",
      description: "Advisory and representation for issues related to development authorities, helping clients navigate complex regulatory requirements and compliance matters.",
      image: developmentAuthoritiesImage
    },
    {
      title: "Property Title Search & Due Diligence",
      description: "Comprehensive property title verification and due diligence services to ensure clear ownership and legal compliance before property transactions.",
      image: propertyTitleSearchImage
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