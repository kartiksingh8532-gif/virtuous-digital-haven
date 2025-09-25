import { Button } from "@/components/ui/button";

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  onReadMore: () => void;
}

export const TeamMemberCard = ({ name, title, image, onReadMore }: TeamMemberCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg text-center border border-brand-border flex flex-col items-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-border object-cover"
      />
      <h3 className="text-xl font-bold text-primary mb-2">
        {name}
      </h3>
      <p className="text-muted-foreground mb-4">
        {title}
      </p>
      <Button
        onClick={onReadMore}
        variant="secondary"
        size="sm"
        className="transition-colors duration-300"
      >
        Read More
      </Button>
    </div>
  );
};