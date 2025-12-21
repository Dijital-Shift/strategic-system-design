import Layout from "@/components/Layout";

const Founder = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-silver uppercase tracking-[0.3em] text-sm mb-6">
            Leadership
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Justin E. Johnson
          </h1>
          <p className="text-lg text-silver">
            Founder & Principal Strategist
          </p>
          <div className="w-24 h-1 bg-accent accent-glow mt-8"></div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Main Content */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-8 border-l-2 border-accent pl-8">
            <p className="text-lg text-foreground leading-relaxed">
              I work at the intersection of systems, structure, and long-range ambition. My role is to help organizations see what their current systems cannot, and to design what comes next.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              I approach every engagement with the same posture: understand the system as it actually operates, identify where logic breaks down, and design structures that allow organizations to grow without compounding friction or fragility.
            </p>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Closing Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-8">
            <p className="text-silver-highlight text-sm uppercase tracking-[0.2em] mb-6">
              My Practice
            </p>
            <p className="text-lg text-silver leading-relaxed">
              I am selective in the work I take on. I do not embed myself operationally, and I do not provide parallel advisory work where incentives conflict. My contribution is clarity, design, and direction.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              All system designs, methods, and intellectual property remain under our control unless expressly otherwise agreed in writing.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Founder;
