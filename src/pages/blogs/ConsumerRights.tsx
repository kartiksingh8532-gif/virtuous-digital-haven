import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConsumerRights = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20">
        <article className="container mx-auto px-6 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="mb-8 hover:bg-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <header className="mb-12 text-center">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6">
              Understanding Consumer Rights in India
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <time>Published on January 2025</time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop"
                alt="Consumer Rights"
                className="w-full h-96 object-cover"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Consumer protection in India has evolved significantly with the enactment of the Consumer Protection Act, 2019, replacing the earlier 1986 Act. This comprehensive legislation aims to protect consumer interests and establish authorities for timely and effective administration of consumer disputes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Six Fundamental Consumer Rights</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">1. Right to Safety</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consumers have the right to be protected against goods and services that are hazardous to life and property. This includes the right to demand that products meet safety standards and manufacturers provide adequate warnings about potential dangers.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">2. Right to Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every consumer has the right to receive complete information about the quality, quantity, purity, standard, and price of goods or services. This prevents unfair trade practices and enables informed decision-making.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">3. Right to Choose</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consumers have the right to choose from a variety of goods and services at competitive prices. This right ensures access to markets free from monopolistic practices and restrictive trade.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">4. Right to be Heard</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consumers have the right to represent their interests in forums and be assured that their concerns will receive due consideration in appropriate forums.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">5. Right to Seek Redressal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consumers have the right to seek redressal against unfair trade practices or exploitation. This includes the right to fair settlement of genuine grievances.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">6. Right to Consumer Education</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consumers have the right to acquire knowledge and skills to become informed consumers throughout life, enabling them to make better choices.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Filing a Consumer Complaint</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Consumer Protection Act, 2019 has established a three-tier quasi-judicial mechanism for consumer dispute resolution:
              </p>
              <ol className="list-decimal list-inside space-y-4 text-muted-foreground ml-4">
                <li className="leading-relaxed">
                  <strong>District Consumer Disputes Redressal Commission</strong> - For disputes up to ₹1 crore
                </li>
                <li className="leading-relaxed">
                  <strong>State Consumer Disputes Redressal Commission</strong> - For disputes above ₹1 crore but not exceeding ₹10 crores
                </li>
                <li className="leading-relaxed">
                  <strong>National Consumer Disputes Redressal Commission</strong> - For disputes exceeding ₹10 crores
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">E-Commerce and Consumer Protection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The 2019 Act specifically addresses e-commerce, requiring online platforms to provide information about return, refund, exchange, warranty, guarantee, delivery, payment methods, grievance redressal mechanism, and country of origin of goods or services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Understanding your consumer rights is essential in today's marketplace. The Consumer Protection Act, 2019 provides robust mechanisms for redressal and ensures that consumers are protected from unfair trade practices. If you face any consumer-related issues, don't hesitate to assert your rights through the appropriate legal channels.
              </p>
            </section>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Need Legal Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Contact Virtuous Law Partners for expert legal consultation and representation.
              </p>
              <Button
                onClick={() => navigate("/#contact")}
                variant="default"
                size="lg"
                className="font-bold"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ConsumerRights;
