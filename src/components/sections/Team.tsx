import { TeamMemberCard } from "@/components/ui/team-member-card";
import lawyerMaleImage from "@/assets/lawyer-male.jpg";

interface TeamProps {
  onTeamMemberClick: (memberId: string) => void;
}

export const Team = ({ onTeamMemberClick }: TeamProps) => {
  const teamMembers = [
    {
      id: "vijay",
      name: "Vijay Chauhan",
      title: "Managing Partner",
      image: lawyerMaleImage
    },
    {
      id: "shweta",
      name: "SHWETA",
      title: "Partner",
      image: "https://i.ibb.co/Y7Bpcr5C/IMG-1382.jpg"
    },
    {
      id: "abhijeet",
      name: "Abhijeet",
      title: "Partner",
      image: lawyerMaleImage
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-primary mb-4">
          Meet Our Team
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-16">
          Our strength lies in our dedicated team of experienced and skilled legal professionals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              {...member}
              onReadMore={() => onTeamMemberClick(member.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};