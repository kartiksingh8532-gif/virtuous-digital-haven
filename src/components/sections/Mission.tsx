export const Mission = () => {
  return (
    <section id="mission" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground">
              To become a leading and most respected law firm recognized for its exceptional 
              legal expertise, unwavering integrity, and profound commitment to client success. 
              We aim to be the first choice for individuals and businesses seeking sophisticated 
              and effective legal counsel.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To provide unwavering, client-focused legal representation that upholds the 
              highest standards of ethics and professionalism. We are committed to delivering 
              innovative, practical, and effective legal solutions that achieve our clients' 
              objectives and exceed their expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};