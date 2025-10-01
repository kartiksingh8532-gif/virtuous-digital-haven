import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrademarkProtection = () => {
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
              Trademark Protection and Registration Process
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <time>Published on December 2024</time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop"
                alt="Trademark Protection"
                className="w-full h-96 object-cover"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">What is a Trademark?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A trademark is a distinctive sign, symbol, word, phrase, logo, or design that identifies and distinguishes the source of goods or services of one party from those of others. The Trade Marks Act, 1999 governs trademark registration and protection in India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trademarks are valuable intellectual property assets that help build brand recognition, customer loyalty, and business reputation. Protecting your trademark is essential for safeguarding your brand identity and preventing unauthorized use by competitors.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Types of Trademarks</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Word Marks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consists of words, letters, or numbers that can be represented in standard characters. Examples include brand names like "Apple" or "Nike."
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Device Marks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Includes logos, symbols, or designs without any words. The distinctive swoosh of Nike or the apple with a bite taken out are examples.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Composite Marks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Combines both word and device elements together, such as a logo with the company name incorporated into the design.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Service Marks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Similar to trademarks but specifically identifies and distinguishes services rather than goods.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Collective Marks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Used by members of an association or organization to indicate membership or origin, such as "CPA" for Certified Public Accountants.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Benefits of Trademark Registration</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">Exclusive right to use the trademark nationwide</li>
                  <li className="leading-relaxed">Legal presumption of ownership and validity</li>
                  <li className="leading-relaxed">Right to sue for trademark infringement</li>
                  <li className="leading-relaxed">Ability to use ® symbol with your trademark</li>
                  <li className="leading-relaxed">Protection against unauthorized use by competitors</li>
                  <li className="leading-relaxed">Increased brand value and business goodwill</li>
                  <li className="leading-relaxed">Licensing and franchising opportunities</li>
                  <li className="leading-relaxed">Protection for 10 years, renewable indefinitely</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Trademark Registration Process</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 1: Trademark Search</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conduct a comprehensive search in the trademark registry database to ensure your proposed mark is not already registered or pending. This helps avoid conflicts and potential rejection.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 2: Filing the Application</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    File the trademark application online through the IP India website with complete details including the mark, class of goods/services, and applicant information. Applications can be filed as proprietor, partnership, or company.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 3: Examination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Trademark Examiner reviews the application for compliance with statutory requirements. If objections are raised, you must respond within one month with appropriate clarifications or amendments.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 4: Publication in Journal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If accepted, the trademark is published in the Trade Marks Journal for public opposition. Any person can oppose the registration within four months of publication.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 5: Registration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If no opposition is filed or opposition is decided in your favor, the trademark is registered, and a registration certificate is issued.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Classification of Goods and Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                India follows the Nice Classification system with 45 classes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-2">Classes 1-34</h4>
                  <p className="text-muted-foreground">Cover various categories of goods including chemicals, paints, cosmetics, machinery, vehicles, etc.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-2">Classes 35-45</h4>
                  <p className="text-muted-foreground">Cover services including advertising, insurance, construction, education, technology services, etc.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Trademark Infringement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trademark infringement occurs when an unauthorized party uses a mark that is identical or deceptively similar to a registered trademark, causing confusion among consumers. Remedies include:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4">
                <li>Injunctions to stop unauthorized use</li>
                <li>Damages or account of profits</li>
                <li>Delivery up or destruction of infringing goods</li>
                <li>Criminal prosecution in certain cases</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Maintaining Your Trademark</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After registration, trademark owners must:
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">Use the trademark continuously to maintain rights</li>
                  <li className="leading-relaxed">File renewal applications every 10 years</li>
                  <li className="leading-relaxed">Monitor the market for potential infringements</li>
                  <li className="leading-relaxed">Take action against unauthorized use</li>
                  <li className="leading-relaxed">Update registration details if business information changes</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trademark registration is a crucial step in protecting your brand identity and building business value. The process, while detailed, provides significant legal protection and competitive advantages. Consulting with trademark attorneys can help navigate the complexities and ensure proper protection of your intellectual property rights.
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

export default TrademarkProtection;
