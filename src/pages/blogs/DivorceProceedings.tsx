import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DivorceProceedings = () => {
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
              Divorce Proceedings in India: What You Need to Know
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <time>Published on December 2024</time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
                alt="Divorce Proceedings"
                className="w-full h-96 object-cover"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Understanding Divorce in India</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Divorce in India is governed by different personal laws depending on the religion of the parties involved. The Hindu Marriage Act, 1955, Special Marriage Act, 1954, Indian Divorce Act, 1869, and Muslim Personal Law (Shariat) Application Act, 1937 are the primary legislations governing divorce proceedings in India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Understanding the legal framework, grounds for divorce, and procedural requirements is essential for anyone considering or going through a divorce in India.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Types of Divorce</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Mutual Consent Divorce</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This is the fastest and least contentious form of divorce where both parties agree to end the marriage. Under Section 13B of the Hindu Marriage Act, couples who have been living separately for at least one year can file for mutual consent divorce. The process involves two motions with a mandatory six-month waiting period between them.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Contested Divorce</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When one party does not consent to the divorce, the other party must file a contested divorce petition citing specific grounds recognized by law. This process is typically longer and more complex, often involving detailed evidence and witness testimony.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Grounds for Divorce under Hindu Marriage Act</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">
                    <strong>Adultery:</strong> Voluntary sexual intercourse with someone other than the spouse
                  </li>
                  <li className="leading-relaxed">
                    <strong>Cruelty:</strong> Physical or mental cruelty making it impossible to live together
                  </li>
                  <li className="leading-relaxed">
                    <strong>Desertion:</strong> Abandonment for a continuous period of at least two years
                  </li>
                  <li className="leading-relaxed">
                    <strong>Conversion:</strong> When a spouse converts to another religion
                  </li>
                  <li className="leading-relaxed">
                    <strong>Mental Disorder:</strong> Incurable mental illness or insanity
                  </li>
                  <li className="leading-relaxed">
                    <strong>Communicable Disease:</strong> Suffering from a virulent and incurable form of leprosy or venereal disease
                  </li>
                  <li className="leading-relaxed">
                    <strong>Renunciation:</strong> Renouncing the world by entering a religious order
                  </li>
                  <li className="leading-relaxed">
                    <strong>Presumption of Death:</strong> When a spouse has not been heard of as being alive for seven years
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Additional Grounds Available to Women</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under Section 13(2) of the Hindu Marriage Act, additional grounds are available exclusively to women:
              </p>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li className="leading-relaxed">Husband has been guilty of rape, sodomy, or bestiality</li>
                    <li className="leading-relaxed">Repudiation of marriage by husband (in case of conversion to another religion)</li>
                    <li className="leading-relaxed">Wife married before attaining fifteen years and repudiates marriage before eighteen</li>
                    <li className="leading-relaxed">Non-resumption of cohabitation after decree of judicial separation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Divorce Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The divorce process involves several stages:
              </p>
              
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">1. Filing the Petition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The divorce petition must be filed in the family court having jurisdiction over the matter. The petition should contain all relevant details, grounds for divorce, and relief sought.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">2. Service of Summons</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The court issues summons to the respondent (other spouse) who must respond within 30 days by filing a written statement.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">3. Evidence and Arguments</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Both parties present their evidence, examine and cross-examine witnesses, and make arguments before the court.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">4. Final Order</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    After considering all evidence and arguments, the court passes a decree granting or rejecting the divorce petition.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Maintenance and Alimony</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Indian law provides for various forms of financial support during and after divorce proceedings:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4">
                <li>Interim maintenance during proceedings</li>
                <li>Permanent alimony after divorce</li>
                <li>Child support and custody arrangements</li>
                <li>Division of matrimonial property</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Child Custody</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The welfare of the child is the paramount consideration in custody matters. Courts may award:
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">
                    <strong>Physical Custody:</strong> Where the child will primarily reside
                  </li>
                  <li className="leading-relaxed">
                    <strong>Legal Custody:</strong> Decision-making authority for the child's welfare
                  </li>
                  <li className="leading-relaxed">
                    <strong>Joint Custody:</strong> Shared custody arrangements
                  </li>
                  <li className="leading-relaxed">
                    <strong>Visitation Rights:</strong> Access to the child for the non-custodial parent
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Divorce is a significant life decision with far-reaching legal, financial, and emotional implications. Understanding your rights, obligations, and the legal process is crucial. It is advisable to consult with an experienced family law attorney who can guide you through the process and protect your interests.
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

export default DivorceProceedings;
