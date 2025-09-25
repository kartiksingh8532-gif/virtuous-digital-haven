interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-brand-border text-left transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-elegant overflow-hidden group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold text-primary mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};