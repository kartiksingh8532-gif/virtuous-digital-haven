import ladyJusticeImage from "@/assets/lady-justice.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <img 
              src={ladyJusticeImage}
              alt="Lady Justice illustration" 
              className="rounded-lg shadow-elegant w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              About Virtuous Law Partners
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Virtuous Law Partners (VLP), we go beyond traditional legal practice to craft tailored solutions for businesses and individuals. As a registered law firm, our mission is to empower you to navigate the legal landscape with confidence and clarity.
              </p>
              <p>
                Our foundation rests on excellence, integrity, and professionalism. These core values aren't just abstract ideals; they are the driving force behind every interaction and strategic decision we make. We recognize that every client's situation is unique, which is why we specialize in developing customized legal strategies designed to precisely meet your specific needs and objectives.
              </p>
              <p>
                What truly sets VLP apart is our unwavering commitment to understanding your challenges and aspirations. Our team of highly skilled and experienced advocates isn't just focused on achieving favorable outcomes; we are dedicated to being your trusted advisors. We diligently leverage our deep legal knowledge to provide the highest level of representation and support, always striving for the best possible results on your behalf.
              </p>
              <div className="mt-6 space-y-2">
                <p className="font-semibold text-primary">Our Core Values:</p>
                <ul className="space-y-1 ml-4">
                  <li><strong>Integrity</strong> – Upholding highest standards of honesty and ethical behavior</li>
                  <li><strong>Excellence</strong> – Committed to achieving excellence in every aspect</li>
                  <li><strong>Client-Centric</strong> – Understanding unique challenges and providing personalized solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};