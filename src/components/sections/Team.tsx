import { TeamMemberCard } from "@/components/ui/team-member-card";

interface TeamProps {
  onTeamMemberClick: (memberId: string) => void;
}

export const Team = ({ onTeamMemberClick }: TeamProps) => {
  const partners = [
    {
      id: "vijay",
      name: "Adv. Vijay Chauhan",
      title: "Partner",
      image: "https://i.ibb.co/yn51TNPj/vj.png"
    },
    {
      id: "shweta",
      name: "Adv. Shweta Upadhyay",
      title: "Partner",
      image: "https://i.ibb.co/dJtsKWXp/sw-m.png"
    },
    {
      id: "abhijeet",
      name: "Adv. Abhijeet Singh Yadav",
      title: "Partner",
      image: "https://i.ibb.co/QVDw02Y/ab.png"
    }
  ];

  const teamMembers = [
    {
      id: "vishisht",
      name: "Mr. Vishisht Singh",
      title: "Team Member",
      image: "https://i.ibb.co/XZh6Khp8/vish.png"
    },
    {
      id: "oorja",
      name: "Adv. Oorja Jain",
      title: "Team Member",
      image: "https://i.ibb.co/tMfqDyd6/orja.png"
    },
    {
      id: "paras",
      name: "Adv. Paras Goel",
      title: "Team Member",
      image: "https://i.ibb.co/0pGjJFnJ/paras.png"
    },
    {
      id: "vansh",
      name: "Adv. Vansh Kalra",
      title: "Team Member",
      image: "https://i.ibb.co/q3JMcVp3/vansh.png"
    },
    {
      id: "ved",
      name: "Adv. Ved Kohli",
      title: "Team Member",
      image: "https://i.ibb.co/5hnswBRK/ved.png"
    },
    {
      id: "pankaj",
      name: "Adv. Pankaj Sharma",
      title: "Team Member",
      image: "https://i.ibb.co/ZzG6frQw/pankaj.png"
    },
    {
      id: "abhay",
      name: "Adv. Abhay Aggarwal",
      title: "Team Member",
      image: "https://i.ibb.co/fzBj1CpP/abhay.png"
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Partners Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Partners
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-16">
            Meet our founding partners leading Virtuous Law Partners with expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8">
            {partners.map((partner) => (
              <TeamMemberCard
                key={partner.id}
                {...partner}
                onReadMore={() => onTeamMemberClick(partner.id)}
              />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Team
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-16">
            Our strength lies in our dedicated team of experienced and skilled legal professionals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                {...member}
                onReadMore={() => onTeamMemberClick(member.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};