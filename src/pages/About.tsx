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
              Dijital Shift is a strategic advisory practice focused on system-level clarity and long-term alignment.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              We work with organizations that recognize their systems are imperfect and are willing to confront the constraints shaping their outcomes. Our role is to examine operations in totality, surface leverage points, and guide decisions that hold under real-world conditions.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              Engagements are selective by design. We do not operate as a volume consultancy, nor do we provide generalized advisory services across competing interests. Work is pursued only where alignment exists and where enduring value can be built without compromising incentives or ownership.
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
            <p className="text-lg text-silver leading-relaxed mb-6">
              We provide clarity and direction. Execution remains with the organization.
            </p>
            <p className="text-lg text-silver leading-relaxed">
              All system logic, frameworks, and intellectual property developed through our work remain under our control unless otherwise defined in writing.
            </p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;