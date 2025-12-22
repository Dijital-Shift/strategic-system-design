import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const TermsOfService = () => {
  return (
    <Layout>
      <PageTransition>
        <div className="min-h-screen bg-background pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-12">
                Terms of Service
              </h1>
              
              <div className="space-y-6 text-silver leading-relaxed">
                <p>
                  By accessing or using this website, you agree to the following terms.
                </p>
                
                <p>
                  All content on this site is provided for general informational purposes only. Nothing on this site constitutes legal, financial, or operational advice.
                </p>
                
                <p>
                  Engaging with this site or submitting an inquiry does not create a client relationship. Any formal engagement will be governed by separate written agreements.
                </p>
                
                <p>
                  We make no guarantees regarding outcomes, results, or performance related to any concepts, discussions, or materials referenced on this site.
                </p>
                
                <p>
                  All systems, logic, methods, designs, and intellectual property remain under our control unless expressly otherwise agreed in writing.
                </p>
                
                <p>
                  We reserve the right to modify or discontinue this site, or any part of it, at any time without notice.
                </p>
                
                <p>
                  Use of this site is at your own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default TermsOfService;
