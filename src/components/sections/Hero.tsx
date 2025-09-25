import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-law-firm.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
          Crafting Solutions, Delivering Justice.
        </h1>
        <p className="text-lg md:text-xl text-brand-light max-w-3xl mx-auto mb-8">
          Navigating legal complexities with confidence, guided by excellence, integrity, and professionalism.
        </p>
        <Button 
          onClick={scrollToContact}
          variant="default"
          size="lg"
          className="font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-glow"
        >
          Request a Consultation
        </Button>
      </div>
    </section>
  );
};