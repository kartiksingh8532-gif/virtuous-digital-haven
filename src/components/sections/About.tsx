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
                At Virtuous Law Partners (VLP), we don't just practice law; we craft solutions. 
                As a registered law firm, our mission is to deliver exceptional legal services 
                that empower both businesses and individuals to navigate the complexities of the 
                legal landscape with confidence.
              </p>
              <p>
                Our firm is built upon a bedrock of excellence, integrity, and professionalism. 
                These aren't just words to us; they are the guiding principles that shape every 
                interaction and inform every strategy. We specialize in providing tailored legal 
                solutions designed to precisely address your specific needs and objectives.
              </p>
              <p>
                What sets VLP apart is our unwavering commitment to understanding your challenges. 
                Our team of highly skilled advocates are your trusted advisors, dedicated to 
                achieving the best possible results on your behalf.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};