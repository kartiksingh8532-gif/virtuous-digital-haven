import { ContactForm } from "@/components/ui/contact-form";
import { ContactInfo } from "@/components/ui/contact-info";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are here to help. Reach out to us for a consultation to discuss your legal needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};