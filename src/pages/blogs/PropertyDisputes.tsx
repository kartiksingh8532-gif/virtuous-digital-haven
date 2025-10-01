import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PropertyDisputes = () => {
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
              Resolving Property Disputes: A Legal Framework
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <time>Published on January 2025</time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
                alt="Property Disputes"
                className="w-full h-96 object-cover"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Property disputes in India are among the most common legal conflicts, often arising from unclear ownership, boundary disagreements, inheritance issues, or fraudulent transactions. Understanding the legal framework for resolving these disputes is crucial for property owners and potential buyers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Common Types of Property Disputes</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Title Disputes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These arise when multiple parties claim ownership of the same property. Often caused by defective documentation, inheritance conflicts, or fraudulent transfers, title disputes require thorough verification of property records and chain of ownership.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Boundary Disputes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Disagreements over property boundaries between neighbors are common, especially in urban areas. These require accurate survey reports and comparison with registered documents to establish correct boundaries.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Tenancy Disputes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conflicts between landlords and tenants regarding rent, eviction, maintenance, or lease terms fall under this category. The Rent Control Acts of various states govern these disputes.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Partition Disputes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When co-owners cannot agree on division of jointly owned property, partition disputes arise. These are common in ancestral properties and require legal intervention for fair division.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Legal Remedies Available</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Indian law provides several avenues for resolving property disputes:
              </p>
              
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Civil Litigation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Filing a civil suit for declaration of title, possession, partition, or injunction in the appropriate civil court. This is governed by the Code of Civil Procedure, 1908.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Alternative Dispute Resolution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mediation and arbitration offer faster, less expensive alternatives to court litigation. The Arbitration and Conciliation Act, 1996 provides the framework for arbitration proceedings.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Criminal Proceedings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In cases involving fraud, forgery, or criminal breach of trust, criminal complaints can be filed under the Indian Penal Code alongside civil remedies.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Prevention is Better Than Cure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To avoid property disputes, consider these preventive measures:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4">
                <li>Conduct thorough due diligence before purchasing property</li>
                <li>Verify title documents and encumbrance certificates</li>
                <li>Ensure proper registration of all property transactions</li>
                <li>Maintain clear documentation of all property-related agreements</li>
                <li>Consult legal experts for complex transactions</li>
                <li>Get property surveys done by licensed surveyors</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Property disputes can be complex and time-consuming. Early legal intervention and proper documentation can prevent many issues. If you're facing a property dispute or planning a property transaction, consulting with experienced property lawyers can save significant time, money, and stress in the long run.
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

export default PropertyDisputes;
