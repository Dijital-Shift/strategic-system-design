import Layout from "@/components/Layout";
const About = () => {
  return <Layout>
      {/* Header Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-silver uppercase tracking-[0.3em] text-sm mb-6">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            Dijital Shift
          </h1>
          <div className="w-24 h-1 bg-accent accent-glow"></div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Main Content - Elevated graphite */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-8 border-l-2 border-accent pl-8">
            <p className="text-lg text-silver leading-relaxed">
              Dijital Shift is a consulting practice focused on system design and strategic clarity.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              We work with organizations that understand their systems are not perfect and are committed to continuous improvement. We are brought in to assess existing operations, surface unseen constraints, and design refined systems that hold up under real-world conditions.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              Engagements are selective. We do not provide generalized consulting across competing interests, nor do we operate as a volume advisory firm. Work is prioritized where alignment exists and where long-term value can be built without compromising incentive structure.
            </p>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Closing Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-silver-highlight text-sm uppercase tracking-[0.2em] mb-6">
              Our Role
            </p>
            <p className="text-lg text-silver leading-relaxed">Our role is to clarify, design, deliver, then step back. Execution remains with the organization. All system designs, logic, and intellectual property remain under our control unless otherwise expressed in writing.</p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;