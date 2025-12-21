import Layout from "@/components/Layout";

const Founder = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Justin E. Johnson
          </h1>
          <p className="text-lg text-muted-foreground">
            Founder & Principal Strategist
          </p>
          <div className="w-16 h-px bg-deep-purple mt-8"></div>
        </div>
      </section>

      {/* Main Content - Uses "I" voice */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              I work at the intersection of systems, structure, and long-range ambition. My role is to help organizations see what their current systems cannot, and to design what comes next.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I approach every engagement with the same posture: understand the system as it actually operates, identify where logic breaks down, and design structures that allow organizations to grow without compounding friction or fragility.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am selective in the work I take on. I do not embed myself operationally, and I do not provide parallel advisory work where incentives conflict. My contribution is clarity, design, and direction.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              All system designs, methods, and intellectual property remain under our control unless expressly otherwise agreed in writing.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="h-px bg-border"></div>
      </div>
    </Layout>
  );
};

export default Founder;
