import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmploymentRights = () => {
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
              Employment Rights and Labour Laws in India
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <time>Published on December 2024</time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop"
                alt="Employment Rights"
                className="w-full h-96 object-cover"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Introduction to Labour Laws in India</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                India has a comprehensive framework of labour laws designed to protect the rights and interests of workers. These laws cover various aspects including working conditions, wages, social security, industrial relations, and dispute resolution. Understanding your employment rights is crucial for every working individual.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The recent consolidation of labour laws into four Labour Codes - on Wages, Industrial Relations, Social Security, and Occupational Safety, Health & Working Conditions - aims to simplify and modernize India's labour law framework.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Fundamental Employment Rights</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">1. Right to Fair Wages</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every employee has the right to receive at least the minimum wage as notified by the government. The Payment of Wages Act, 1936 ensures timely payment of wages without unauthorized deductions. Employers must pay wages on time and cannot make arbitrary deductions.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">2. Right to Safe Working Conditions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Factories Act, 1948 and Occupational Safety, Health and Working Conditions Code ensure that employers provide safe and healthy working conditions. This includes proper lighting, ventilation, safety equipment, and protection from workplace hazards.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">3. Right to Social Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Employees are entitled to social security benefits including Provident Fund (PF), Employee State Insurance (ESI), gratuity, and maternity benefits. These provide financial security during employment and after retirement.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">4. Right Against Discrimination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Constitution of India and various labour laws prohibit discrimination based on gender, religion, caste, or disability. Equal pay for equal work is a fundamental right guaranteed to all workers.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">5. Right to Form Unions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Trade Unions Act, 1926 gives workers the right to form and join trade unions for collective bargaining and protecting their interests. Employers cannot discriminate against union members.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Working Hours and Leave Entitlements</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Maximum Working Hours</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Under the Factories Act and Shops and Establishments Acts:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Maximum 9 hours of work per day</li>
                    <li>Maximum 48 hours per week</li>
                    <li>Overtime payment at double the regular rate</li>
                    <li>Weekly rest day mandatory</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Leave Entitlements</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li className="leading-relaxed">
                      <strong>Earned Leave:</strong> 1 day for every 20 days worked
                    </li>
                    <li className="leading-relaxed">
                      <strong>Casual Leave:</strong> As per company policy, typically 7-12 days per year
                    </li>
                    <li className="leading-relaxed">
                      <strong>Sick Leave:</strong> As per company policy or Shops & Establishments Act
                    </li>
                    <li className="leading-relaxed">
                      <strong>Maternity Leave:</strong> 26 weeks for women employees (up to 2 children)
                    </li>
                    <li className="leading-relaxed">
                      <strong>Paternity Leave:</strong> As per company policy, typically 5-15 days
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Termination and Retrenchment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Industrial Disputes Act, 1947 and the new Industrial Relations Code regulate termination and retrenchment:
              </p>
              
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Notice Period</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Employers must provide notice as specified in the employment contract or one month's notice. Payment in lieu of notice can be made if immediate termination is required.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Retrenchment Compensation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Workers who have completed one year of continuous service are entitled to retrenchment compensation at 15 days' wages for every completed year of service.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Gratuity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Under the Payment of Gratuity Act, 1972, employees who have completed five years of continuous service are entitled to gratuity at 15 days' wages for every completed year of service.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Unfair Dismissal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Termination without valid reason or due process can be challenged as unfair dismissal. Employees can approach Labour Courts or Industrial Tribunals for relief including reinstatement and back wages.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Workplace Harassment and Safety</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 mandates:
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">Every workplace must have an Internal Complaints Committee (ICC)</li>
                  <li className="leading-relaxed">Complaints must be investigated within 90 days</li>
                  <li className="leading-relaxed">Strict action against perpetrators including termination</li>
                  <li className="leading-relaxed">Protection against retaliation for complainants</li>
                  <li className="leading-relaxed">Annual reporting to government authorities</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Employment disputes can be resolved through:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4">
                <li>Internal grievance redressal mechanisms</li>
                <li>Conciliation officers appointed by Labour Department</li>
                <li>Labour Courts for individual disputes</li>
                <li>Industrial Tribunals for collective disputes</li>
                <li>High Courts and Supreme Court for constitutional matters</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Understanding your employment rights is essential for a fair and productive workplace relationship. If you believe your rights have been violated, it's important to document incidents, seek legal advice promptly, and take appropriate action through proper channels. Labour laws exist to protect workers and ensure fair treatment in the workplace.
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

export default EmploymentRights;
