import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageTransition>
        <div className="min-h-screen bg-background pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-12">
                Privacy Policy
              </h1>
              
              <div className="space-y-6 text-silver leading-relaxed">
                <p>
                  We respect your privacy and are committed to protecting it.
                </p>
                
                <p>
                  When you submit information through this site, such as your name, email address, or message, that information is used solely to respond to your inquiry or continue a conversation you initiated.
                </p>
                
                <p>
                  We do not sell, rent, or trade personal information. We do not use submitted information for advertising, profiling, or unrelated outreach.
                </p>
                
                <p>
                  Information submitted through this site may be stored securely for record-keeping and communication purposes. We take reasonable measures to protect any information shared with us.
                </p>
                
                <p>
                  This site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
                </p>
                
                <p>
                  If you have questions about this policy or how your information is handled, you may contact us directly.
                </p>
                
                <p>
                  This policy may be updated from time to time. Continued use of this site constitutes acceptance of the current policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default PrivacyPolicy;
