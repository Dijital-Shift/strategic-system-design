import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const TermsOfService = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Header Section */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <p className="text-silver uppercase tracking-[0.3em] text-sm mb-6">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
              Terms of Service
            </h1>
            <div className="w-24 h-1 bg-accent accent-glow"></div>
          </div>
        </section>

        {/* Bold Gradient Divider */}
        <div className="h-1 divider-gradient" />

        {/* Main Content */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl space-y-6 border-l-2 border-accent pl-8">
              <p className="text-lg text-silver leading-relaxed">
                By accessing or using this website, you agree to the following terms.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                All content on this site is provided for general informational purposes only. Nothing on this site constitutes legal, financial, or operational advice.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                Engaging with this site or submitting an inquiry does not create a client relationship. Any formal engagement will be governed by separate written agreements.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                We make no guarantees regarding outcomes, results, or performance related to any concepts, discussions, or materials referenced on this site.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                All systems, logic, methods, designs, and intellectual property remain under our control unless expressly otherwise agreed in writing.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                We reserve the right to modify or discontinue this site, or any part of it, at any time without notice.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                Use of this site is at your own risk.
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
                Questions
              </p>
              <p className="text-lg text-silver leading-relaxed">
                If you have questions regarding these terms, you may contact us directly.
              </p>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default TermsOfService;
