import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center border-b border-graphite">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-8 animate-fade-in">
              Strategic System Design for Ambitious Organizations
            </h1>
            <p className="text-lg md:text-xl text-silver leading-relaxed mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We work with organizations that have built something meaningful and now need their systems to match their ambition.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="outline" size="lg" className="border-graphite text-bone hover:bg-graphite hover:text-bone">
                <Link to="/contact">Request a Strategic Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 lg:py-32 bg-graphite border-b border-deep-purple">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-bone leading-relaxed">
              We come in when things feel heavier than they should. We look at how decisions are made, how information moves, and where effort is being wasted. We design systems that make the organization sharper, faster, and harder to break.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/about"
              className="group p-8 border border-graphite bg-background hover:bg-graphite transition-colors duration-300"
            >
              <h3 className="text-xl font-serif text-bone mb-3">About</h3>
              <p className="text-sm text-silver">
                Our practice and approach
              </p>
            </Link>

            <Link
              to="/services"
              className="group p-8 border border-graphite bg-background hover:bg-graphite transition-colors duration-300"
            >
              <h3 className="text-xl font-serif text-bone mb-3">Services</h3>
              <p className="text-sm text-silver">
                How engagements begin
              </p>
            </Link>

            <Link
              to="/founder"
              className="group p-8 border border-graphite bg-background hover:bg-graphite transition-colors duration-300"
            >
              <h3 className="text-xl font-serif text-bone mb-3">Founder</h3>
              <p className="text-sm text-silver">
                Principal Strategist
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
