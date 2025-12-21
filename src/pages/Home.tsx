import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-background relative overflow-hidden">
        {/* Subtle accent glow in background */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" />
        
        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
          <div className="max-w-4xl">
            <p className="text-silver uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
              Strategic System Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              For Ambitious Organizations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We work with organizations that have built something meaningful and now need their systems to match their ambition.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 border-0 accent-glow transition-all duration-300"
              >
                <Link to="/contact">Request a Strategic Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Positioning Section - Elevated graphite */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-l-2 border-accent pl-8">
            <p className="text-silver-highlight text-sm uppercase tracking-[0.2em] mb-6">
              Our Approach
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              We come in when things feel heavier than they should. We look at how decisions are made, how information moves, and where effort is being wasted. We design systems that make the organization sharper, faster, and harder to break.
            </p>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Navigation Cards */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-silver text-sm uppercase tracking-[0.2em] mb-12">
            Explore
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/about"
              className="group p-8 border border-border hover:border-accent bg-card hover:bg-secondary transition-all duration-300 card-glow"
            >
              <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">About</h3>
              <p className="text-sm text-silver-dim group-hover:text-silver transition-colors">
                Our practice and approach
              </p>
            </Link>

            <Link
              to="/services"
              className="group p-8 border border-border hover:border-accent bg-card hover:bg-secondary transition-all duration-300 card-glow"
            >
              <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">Services</h3>
              <p className="text-sm text-silver-dim group-hover:text-silver transition-colors">
                How engagements begin
              </p>
            </Link>

            <Link
              to="/founder"
              className="group p-8 border border-border hover:border-accent bg-card hover:bg-secondary transition-all duration-300 card-glow"
            >
              <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">Founder</h3>
              <p className="text-sm text-silver-dim group-hover:text-silver transition-colors">
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
