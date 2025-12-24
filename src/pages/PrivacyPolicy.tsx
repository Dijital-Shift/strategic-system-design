import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const PrivacyPolicy = () => {
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
              Privacy Policy
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
                We respect your privacy and are committed to protecting it.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                When you submit information through this site, such as your name, email address, or message, that information is used solely to respond to your inquiry or continue a conversation you initiated.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                We do not sell, rent, or trade personal information. We do not use submitted information for advertising, profiling, or unrelated outreach.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                Information submitted through this site may be stored securely for record-keeping and communication purposes. We take reasonable measures to protect any information shared with us.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                This site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                If you have questions about this policy or how your information is handled, you may contact us directly.
              </p>
              
              <p className="text-lg text-silver leading-relaxed">
                This policy may be updated from time to time. Continued use of this site constitutes acceptance of the current policy.
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
                Contact
              </p>
              <p className="text-lg text-silver leading-relaxed">
                For privacy-related inquiries, please reach out through our contact page.
              </p>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default PrivacyPolicy;
