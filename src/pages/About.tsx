import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            About Dijital Shift
          </h1>
          <div className="w-16 h-px bg-accent"></div>
        </div>
      </section>

      {/* Purple Accent Divider */}
      <div className="h-px bg-accent" />

      {/* Main Content - Graphite background for layering */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              Dijital Shift is a consulting practice focused on system design and strategic clarity.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with organizations that understand their systems are not perfect and are committed to continuous improvement. We are brought in to assess existing operations, surface unseen constraints, and design refined systems that hold up under real-world conditions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Engagements are selective. We do not provide generalized consulting across competing interests, nor do we operate as a volume advisory firm. Work is prioritized where alignment exists and where long-term value can be built without compromising incentive structure.
            </p>
          </div>
        </div>
      </section>

      {/* Purple Accent Divider */}
      <div className="h-px bg-accent" />

      {/* Closing Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our role is to clarify, design, and deliver, then step back. Execution remains with the organization. All system designs, logic, and intellectual property remain under our control unless expressly otherwise agreed in writing.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
