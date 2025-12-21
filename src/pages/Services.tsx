import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            Services
          </h1>
          <div className="w-16 h-1 bg-accent"></div>
        </div>
      </section>

      {/* Purple Accent Divider */}
      <div className="h-0.5 bg-accent" />

      {/* How Engagements Begin */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-l border-accent pl-6">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              How Engagements Begin
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Organizations reach out when something no longer scales the way it should. There may be a stated goal or problem, but it is rarely the full picture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our first step is diagnostic. We determine what is actually driving the friction, where decisions are constrained, and which parts of the system are misaligned. Only after that clarity is established does design begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Accent Divider */}
      <div className="h-0.5 bg-accent" />

      {/* System Expansion & Redesign */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-l border-accent pl-6">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              System Expansion & Redesign
            </h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Primary mode of engagement
            </p>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Once the underlying structure is understood, we redesign the system so the organization can operate at a larger scale than originally intended. The initial request becomes a starting point, not the objective.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What begins as a narrow initiative often expands into a broader redesign of how value is created, how partners interact, and how the organization grows without introducing fragility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Accent Divider */}
      <div className="h-0.5 bg-accent" />

      {/* What We Provide */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-l border-accent pl-6">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              What We Provide
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                We provide system rationale that can be tested, verified, and defended.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This rationale explains why a system should exist, how it should function, and what changes once it is in place. It allows leadership teams to understand the logic behind decisions, align execution, and avoid repeating the same structural mistakes as the organization grows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
