import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import lawyerMaleImage from "@/assets/lawyer-male.jpg";

interface TeamModalProps {
  memberId: string;
  onClose: () => void;
}

export const TeamModal = ({ memberId, onClose }: TeamModalProps) => {
  const teamData = {
    vijay: {
      name: "Vijay Chauhan",
      title: "Managing Partner",
      image: lawyerMaleImage,
      bio: "Vijay Chauhan, an accomplished legal professional, is the founding partner of Virtuous Law Partners. With a robust background in criminal and civil litigation, he has successfully represented a diverse clientele, from individuals to corporations, before various judicial forums including the Supreme Court of India, High Courts, and District Courts. His practice areas include white-collar crimes, corporate fraud, anti-corruption laws, and complex commercial disputes. Known for his sharp legal acumen and strategic approach, Vijay is dedicated to upholding justice and delivering favorable outcomes for his clients. He holds an LL.B. from the Faculty of Law, University of Delhi, and is a member of the Supreme Court Bar Association."
    },
    shweta: {
      name: "SHWETA",
      title: "Partner",
      image: "https://i.ibb.co/Y7Bpcr5C/IMG-1382.jpg",
      bio: "Shweta is a distinguished advocate with a specialization in civil and commercial litigation. Her expertise encompasses a wide range of disputes, including property law, contractual obligations, and corporate conflicts. She is renowned for her meticulous case preparation, persuasive argumentation, and unwavering dedication to her clients' interests. Shweta has a proven track record of securing favorable judgments and settlements in complex high-stakes litigation. She earned her LL.B. from Amity Law School, Delhi, and is an active member of the Delhi High Court Bar Association."
    },
    abhijeet: {
      name: "Abhijeet",
      title: "Partner",
      image: lawyerMaleImage,
      bio: "Detailed biography for Abhijeet coming soon."
    }
  };

  const member = teamData[memberId as keyof typeof teamData];

  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
      <div className="bg-background rounded-lg shadow-elegant max-w-2xl w-full p-8 relative border border-brand-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-3xl font-bold transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-32 h-32 rounded-full border-4 border-brand-border object-cover flex-shrink-0"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-serif font-bold text-primary mb-2">
              {member.name}
            </h3>
            <p className="text-muted-foreground mb-4 text-lg">
              {member.title}
            </p>
            <p className="text-muted-foreground text-left leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};