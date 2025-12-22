import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-silver uppercase tracking-[0.3em] text-sm mb-6">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            Services
          </h1>
          <div className="w-24 h-1 bg-accent accent-glow"></div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* How Engagements Begin */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-l-2 border-accent pl-8">
            <p className="text-silver-highlight text-sm uppercase tracking-[0.2em] mb-4">
              Getting Started
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              How Engagements Begin
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-silver leading-relaxed">
                Organizations reach out when something no longer scales the way it should. There may be a stated goal or challenge, but it is rarely the full picture.
              </p>
              <p className="text-lg text-silver leading-relaxed">
                In other cases, we initiate the conversation. This happens when we recognize an organization positioned for a larger evolution — one where new systems could open entirely different lanes, opportunities, or trajectories that were not originally in view.
              </p>
              <p className="text-lg text-silver leading-relaxed">
                We are selective in both directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* System Expansion & Redesign */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-l-2 border-accent pl-8">
            <p className="text-silver-highlight text-sm uppercase tracking-[0.2em] mb-4">
              Primary Mode
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              System Expansion & Redesign
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-silver leading-relaxed">
                Once the underlying structure is understood, we redesign the system so the organization can operate at a larger scale than originally intended. The initial request becomes a starting point, not the objective.
              </p>
              <p className="text-lg text-silver leading-relaxed">
                What begins as a narrow initiative often expands into a broader redesign of how value is created, how partners interact, and how the organization grows without introducing fragility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* What We Provide */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-l-2 border-accent pl-8">
            <p className="text-silver-highlight text-sm uppercase tracking-[0.2em] mb-4">
              Deliverables
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              What We Provide
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-silver leading-relaxed">
                We provide system rationale that can be tested, verified, and defended.
              </p>
              <p className="text-lg text-silver leading-relaxed">
                This rationale explains why a system should exist, how it should function, and what changes once it is in place. It allows leadership teams to understand the logic behind decisions, align execution, and avoid repeating the same structural mistakes as the organization grows.
              </p>
              <p className="text-lg text-silver leading-relaxed">
                Without clear system rationale, organizations rely on intuition and precedent. With it, they operate with intent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
