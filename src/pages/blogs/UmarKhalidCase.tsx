import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UmarKhalidCase = () => {
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
              Umar Khalid Case: A Legal Analysis
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <time>Published on January 2025</time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Hero Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
                alt="Justice and Law"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Background Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Background</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On 14th September 2020, Umar Khalid, former PhD scholar in JNU and political activist, along with other activists and protestors, were arrested by Delhi Police Special Cell in connection to Delhi North-East Riots. They were arrested under the suspicion of inciting Delhi riots, which led to 54 recorded deaths and various injuries. All the protestors against CAA-NRC were charged with various offences including various provisions under IPC and UAPA including Section 16 which states that punishment for terrorism shall be death penalty. Provisions under IPC, including rioting (Sections 147, 148), murder (Section 302), unlawful assembly (Section 149), sedition (Section 124A), and promoting enmity between groups (Section 153A).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Delhi Police refers to him as the 'key conspirator' of the riots, who, along with others, allegedly planned and orchestrated the riots during protests that turned violent. He is charged for making 'provocative speech' and bringing as well as organising and inducing feelings of dissent in the common masses. Khalid denies all the said charges and called them politically motivated.
              </p>
            </section>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop"
                alt="Legal Documentation"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=600&h=400&fit=crop"
                alt="Court Proceedings"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Historical Background */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Historical Background of UAPA</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Unlawful Activities (Prevention) Act (UAPA), enacted in 1967, aims to effectively prevent unlawful actions by individuals or groups that threaten India's sovereignty and integrity. In the 1960s, rising communalism, regionalism, and threats to national unity led the government to empower Parliament with constitutional amendments, permitting reasonable restrictions on freedoms of speech, assembly, and association.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The UAPA was enacted to implement these powers, targeting secessionist, terrorist, and anti-national activities. Its objectives include preventing such unlawful activities, prosecuting terrorist acts, and empowering the government to designate individuals and organizations as terrorists. The Act has been amended multiple times to address evolving security challenges, including the 2019 amendment allowing designation of individual terrorists, reflecting India's response to modern threats to national security.
              </p>
            </section>

            {/* Key Contentions */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Key Contentions</h2>
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
                  <li className="leading-relaxed">
                    Khalid is termed a 'key conspirator' behind the incitement of violence which broke out in Delhi. There is a clear nexus between Anti CAA-NRC protest and riots which broke out in the light of it.
                  </li>
                  <li className="leading-relaxed">
                    UAPA is a restrictive law and the court can deny bail if there seems a prima facie valid case. The 'notwithstanding' clause in both evidence law and criminal procedural law supports the same argument.
                  </li>
                  <li className="leading-relaxed">
                    Solicitor General Tushar Mehta said that the accused must be kept in jail until they either get acquitted or convicted.
                  </li>
                </ol>
              </div>
            </section>

            {/* Legal Analysis Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200&h=600&fit=crop"
                alt="Legal Analysis"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Question of Law */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Question of Law v. Saga of Defence Counsel</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Senior advocate Kapil Sibal is representing Umar Khalid in his bail matter for Delhi riots and UAPA proceedings. The senior counsel over the span of 5 years has conducted various press conferences and opted for various mechanisms such as media debates and interviews to keep Umar Khalid's voice.
              </p>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">1. Fundamental Rights Violation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Incarceration for over 5 years without bail is not usual, but it is the reality of few protestors. Mr. Sibal's main arguments on Umar's issue is that there is a sheer violation of Fundamental Rights under Article 21 of the Indian Constitution which guarantees right to life and liberty; it has been denied by continuous incarceration. Khalid has been behind the bars for over 5 years now.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">2. Nexus Between Violence and Protest</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The major nexus upon which the entire case of prosecution stands is the rational nexus of connection between violence and CAA-NRC protest. The prosecution has failed to establish a connection between Delhi riots and CAA-NRC protest as the cause of violence which lead to death and injury of the many. There is no question mark upon the existence of these two events, but establishing the connection between the two needs to be proven.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">3. Right to Dissent</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    India is the largest democracy in the world, one of the major pillars for safeguarding and protection of democracy is dissent. Mr. Sibal highlights that Right to protest is a fundamental right protected under Article 19 that is Right to speech and expression, mere dissent towards a policy or law shall not tantamount to UAPA charges.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">4. Chargesheet Doctrine</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The bail and chargesheet doctrine which is being followed in cases of UAPA is different from the one which is commonly used under CrPc, now BNSS. The status of chargesheet under criminal jurisprudence as a general rule is that, it is merely a point of view of the investigating agency and should not be very strictly scrutinised for grant of bail. Whereas under Section 43D(5), UAPA gives chargesheet uttermost importance, the existence of whether case prima facie exists or not is based completely on chargesheet, if proven so the bail shall be denied.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    However, Mr. Sibal argues that the chargesheet can not be treated as more than just a point of view of investigating authorities, not a conclusive proof. Citing judicial precedents in UAPA cases, Sibal lamented that "the Supreme Court violates its own decisions". The judicial decisions cited by him included – Athar Parwez v. Union of India (accused spent 2 years 4 months in jail; got bail); Shoma Kantil Sen v. State (accused spent 6 year in jail; got bail); Jahir Haq v. State of Rajasthan (accused spent 8 years in jail; got bail) and Union of India v K.A Najeeb (accused spent 5 years in jail, got bail). It was mentioned that in some of these cases, even charges had been framed, which is not the case with Khalid.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">5. Evidence Presentation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mr. Sibal also presents his concern over the fact that prosecution has not presented the alleged videos and around 700 witnesses, if the same is presented there shall be some clarity given and the court can reach a conclusion of the real faces behind the violence which broke. The admissibility of electronic evidence is subjected to lack of provisions in Indian Evidence Act, which does not accommodate videographic evidence. Since the arrest was made in 2020 so the provisions of IEA shall prevail not but provisions of BSA shall, by the virtue of Section 160(Saving clause), which states that it does not have retrospective effect and any case before the date of enforcement of Bhartiya Sakshya Adhiniyam shall be dealt in the light of IEA.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=1200&h=600&fit=crop"
                alt="Justice Scales"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bail is the rule, jail is the expectation is the commonly accepted doctrine of criminal jurisprudence, anyhow in the special laws under defined statute has different rules to be followed. While the contention of the defences holds a very strong space but they are not administered and accepted by the Hon'ble High Court of Delhi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The country clearly seems to be divided into two separate groups, one which supports the undefined and what seems like an infinite incarceration of alleged anti nationals and key conspirators of Delhi North-East Riots; while the other group's lobby echo with the reasoning of one's fundamental rights and human rights.
              </p>
            </section>

            {/* Call to Action */}
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

export default UmarKhalidCase;
